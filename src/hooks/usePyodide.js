// Pyodide 0.26.4 — Python compiled to WebAssembly, runs entirely in the browser.
// Loaded from CDN (NOT npm) because Vite cannot bundle Pyodide's WASM correctly.

const PYODIDE_VERSION = '0.26.4'
const CDN_BASE = `https://cdn.jsdelivr.net/pyodide/v${PYODIDE_VERSION}/full/`

// Module-level singleton — survives React Router page navigations.
let pyodidePromise = null

function injectPyodideScript() {
  return new Promise((resolve, reject) => {
    if (window.loadPyodide) { resolve(); return }
    if (document.querySelector('script[data-pyodide]')) {
      const check = setInterval(() => {
        if (window.loadPyodide) { clearInterval(check); resolve() }
      }, 100)
      return
    }
    const script = document.createElement('script')
    script.src = `${CDN_BASE}pyodide.js`
    script.setAttribute('data-pyodide', 'true')
    script.onload = resolve
    script.onerror = () => reject(new Error('Failed to load Pyodide from CDN'))
    document.head.appendChild(script)
  })
}

export function getPyodideSingleton() {
  if (!pyodidePromise) {
    pyodidePromise = injectPyodideScript()
      .then(() => window.loadPyodide({ indexURL: CDN_BASE }))
      .catch(err => { pyodidePromise = null; throw err })
  }
  return pyodidePromise
}

/**
 * Run Python code and return captured output.
 *
 * Uses Python's own StringIO for stdout/stderr capture — this is more
 * reliable than pyodide.setStdout() across all Pyodide versions.
 *
 * The user code is passed via pyodide.globals to avoid any escaping issues.
 * exec() runs it in a clean namespace with access to all builtins + imports.
 */
export async function runPython(code) {
  const pyodide = await getPyodideSingleton()

  try {
    // Pass user code as a Python object — avoids any escaping issues
    pyodide.globals.set('_user_code', code)

    const output = await pyodide.runPythonAsync(`
import sys
from io import StringIO

_buf = StringIO()
_old_stdout = sys.stdout
_old_stderr = sys.stderr
sys.stdout = _buf
sys.stderr = _buf

try:
    exec(_user_code, {'__name__': '__main__', '__builtins__': __builtins__})
except Exception:
    import traceback
    traceback.print_exc()
finally:
    sys.stdout = _old_stdout
    sys.stderr = _old_stderr

_buf.getvalue()
`)

    // Clean up the global we set
    pyodide.globals.delete('_user_code')

    const text = (output || '').trim()
    return {
      text: text || '(no output — add print() calls below the function)',
      isError: false,
    }
  } catch (e) {
    // Syntax errors or Pyodide-level failures land here
    try { pyodide.globals.delete('_user_code') } catch (_) {}
    return { text: e.message, isError: true }
  }
}
