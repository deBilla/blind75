import { useState, useRef, useEffect } from 'react'
import { getPyodideSingleton, runPython } from '../hooks/usePyodide'

// ── Syntax highlighter ───────────────────────────────────────────────────────
const KEYWORDS = new Set(['def','return','if','elif','else','for','while','in','not','and','or',
  'True','False','None','import','from','class','self','pass','break','continue','lambda',
  'async','await','try','except','finally','with','as','raise','global','nonlocal','del','assert','yield'])
const BUILTINS = new Set(['range','len','max','min','sum','sorted','enumerate','zip','list','dict',
  'set','tuple','int','str','float','print','append','pop','heappush','heappop','ceil','floor',
  'defaultdict','deque','Counter','abs','any','all','map','filter','reversed','isinstance',
  'type','hasattr','getattr','setattr','super','staticmethod','classmethod','property','round'])

function highlight(code) {
  let out = '', i = 0
  while (i < code.length) {
    // comment
    if (code[i] === '#') {
      let j = i; while (j < code.length && code[j] !== '\n') j++
      out += `<span class="cmt">${esc(code.slice(i,j))}</span>`; i = j; continue
    }
    // string
    if (code[i] === '"' || code[i] === "'") {
      const q = code[i]
      if (code.slice(i,i+3) === q.repeat(3)) {
        let j = i+3; while (j < code.length && code.slice(j,j+3) !== q.repeat(3)) j++
        out += `<span class="str">${esc(code.slice(i,j+3))}</span>`; i = j+3; continue
      }
      let j = i+1; while (j < code.length && code[j] !== q && code[j] !== '\n') j++
      out += `<span class="str">${esc(code.slice(i,j+1))}</span>`; i = j+1; continue
    }
    // number
    if (/\d/.test(code[i]) && (i===0 || /\W/.test(code[i-1]))) {
      let j = i; while (j < code.length && /[\d.]/.test(code[j])) j++
      out += `<span class="nm">${esc(code.slice(i,j))}</span>`; i = j; continue
    }
    // word
    if (/[a-zA-Z_]/.test(code[i])) {
      let j = i; while (j < code.length && /\w/.test(code[j])) j++
      const w = code.slice(i,j)
      if (KEYWORDS.has(w)) out += `<span class="kw">${w}</span>`
      else if (BUILTINS.has(w)) out += `<span class="fn">${w}</span>`
      else if (/^[A-Z]/.test(w)) out += `<span class="cls">${w}</span>`
      else out += esc(w)
      i = j; continue
    }
    out += esc(code[i]); i++
  }
  return out
}

function esc(s) {
  return s.replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;')
}

// ── Component ────────────────────────────────────────────────────────────────
export default function CodeBlock({ code, lang = 'Python', testCode }) {
  const [copied,    setCopied]    = useState(false)
  const [isRunMode, setIsRunMode] = useState(false)
  const [editable,  setEditable]  = useState('')
  const [output,    setOutput]    = useState(null)   // { text, isError }
  const [running,   setRunning]   = useState(false)
  const [pyStatus,  setPyStatus]  = useState('idle') // idle | loading | ready

  const textareaRef = useRef(null)

  // Auto-grow textarea to fit its content every time editable changes
  useEffect(() => {
    const el = textareaRef.current
    if (!el) return
    el.style.height = 'auto'                      // reset to measure scrollHeight
    el.style.height = el.scrollHeight + 'px'      // expand to fit
  }, [editable, isRunMode])

  // ── Copy ──────────────────────────────────────────────────────────────────
  const handleCopy = () => {
    navigator.clipboard.writeText(isRunMode ? editable : code)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  // ── Open run mode: swap <pre> → <textarea> ────────────────────────────────
  const openRun = () => {
    const full = testCode
      ? `${code}\n\n# ── Test Cases ──────────────────────────────\n${testCode}`
      : `${code}\n\n# ── Add your test calls below ───────────────\n# print(functionName(...))`
    setEditable(full)
    setOutput(null)
    setIsRunMode(true)
  }

  const closeRun = () => { setIsRunMode(false); setOutput(null) }

  // ── Tab → 4 spaces ────────────────────────────────────────────────────────
  const handleKeyDown = (e) => {
    if (e.key !== 'Tab') return
    e.preventDefault()
    const el = e.target
    const s = el.selectionStart, end = el.selectionEnd
    setEditable(prev => prev.slice(0, s) + '    ' + prev.slice(end))
    requestAnimationFrame(() => { el.selectionStart = el.selectionEnd = s + 4 })
  }

  // ── Execute ───────────────────────────────────────────────────────────────
  const handleRun = async () => {
    if (running) return
    setRunning(true)
    setOutput(null)
    if (pyStatus === 'idle') {
      setPyStatus('loading')
      getPyodideSingleton()
        .then(() => setPyStatus('ready'))
        .catch(() => setPyStatus('idle'))
    }
    const result = await runPython(editable)
    setPyStatus('ready')
    setOutput(result)
    setRunning(false)
  }

  const runLabel = running
    ? (pyStatus === 'loading' ? '⏳ Loading Python…' : '⏳ Running…')
    : '▶ Run Code'

  return (
    <div className="code-block">

      {/* Header ─────────────────────────────────────────────────────────── */}
      <div className="code-header">
        <span className="code-lang">{lang}</span>
        <div className="code-header-actions">
          {lang === 'Python' && !isRunMode && (
            <button className="run-btn" onClick={openRun}>▶ Run</button>
          )}
          {isRunMode && <>
            <button
              className={`exec-btn${running ? ' running' : ''}`}
              onClick={handleRun}
              disabled={running}
            >{runLabel}</button>
            <button className="close-run-btn" onClick={closeRun} title="Back to read-only">✕</button>
          </>}
          <button className={`copy-btn${copied ? ' copied' : ''}`} onClick={handleCopy}>
            {copied ? '✓' : 'Copy'}
          </button>
        </div>
      </div>

      {/* Main code area ─────────────────────────────────────────────────── */}
      {isRunMode ? (
        <textarea
          ref={textareaRef}
          className="code-editor-main"
          value={editable}
          onChange={e => setEditable(e.target.value)}
          onKeyDown={handleKeyDown}
          spellCheck={false}
          autoCorrect="off"
          autoCapitalize="off"
          autoComplete="off"
        />
      ) : (
        <pre dangerouslySetInnerHTML={{ __html: highlight(code) }} />
      )}

      {/* Output ─────────────────────────────────────────────────────────── */}
      {output && (
        <div className={`output-panel${output.isError ? ' output-error' : ''}`}>
          <div className="output-label">
            {output.isError ? '✗ Error' : '✓ Output'}
          </div>
          <pre className="output-pre">{output.text}</pre>
        </div>
      )}

      {/* Hint when no testCode and panel is open ───────────────────────── */}
      {isRunMode && !output && !running && !testCode && (
        <div className="output-hint">
          Add test calls below the function, e.g.{' '}
          <code>print(functionName(arg))</code>
        </div>
      )}
    </div>
  )
}
