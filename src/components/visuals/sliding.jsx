import { useAutoStep, Note } from './primitives'

// ── Longest Repeating Character Replacement ───────────────────────────────────

export function LongestReplacingViz() {
  const s = 'AABABBA'
  const k = 1

  const steps = (() => {
    const result = []
    let l = 0, maxFreq = 0, maxLen = 0
    const count = {}
    for (let r = 0; r < s.length; r++) {
      count[s[r]] = (count[s[r]] || 0) + 1
      maxFreq = Math.max(maxFreq, count[s[r]])
      while ((r - l + 1) - maxFreq > k) { count[s[l]]--; l++ }
      maxLen = Math.max(maxLen, r - l + 1)
      result.push({ l, r, maxFreq, winSize: r - l + 1, maxLen })
    }
    return result
  })()

  const step = useAutoStep(steps.length, 800)
  const { l, r, maxFreq, winSize, maxLen } = steps[step]

  return (
    <div>
      <div className="cell-row" style={{ marginBottom: 6 }}>
        {s.split('').map((c, i) => (
          <div key={i}
            className={`cell ${i === r ? 'current' : i >= l && i <= r ? 'window' : i < l ? 'seen' : ''}`}
            style={{ width: 28, height: 28, minWidth: 28 }}>{c}</div>
        ))}
      </div>
      <Note>
        window={winSize} · maxFreq={maxFreq} · replacements={winSize - maxFreq} (k={k}) · best={maxLen}
      </Note>
    </div>
  )
}

// ── Minimum Window Substring ──────────────────────────────────────────────────

export function MinWindowViz() {
  const s = 'ADOBECODEBANC'
  const t = 'ABC'
  const need = { A: 1, B: 1, C: 1 }

  const steps = (() => {
    const result = []
    const have = {}
    let l = 0, formed = 0, minWin = ''
    const required = Object.keys(need).length
    for (let r = 0; r < s.length; r++) {
      const c = s[r]
      have[c] = (have[c] || 0) + 1
      if (need[c] && have[c] === need[c]) formed++
      while (formed === required) {
        const win = s.slice(l, r + 1)
        if (!minWin || win.length < minWin.length) minWin = win
        result.push({ l, r, formed, minWin, shrink: true })
        const lc = s[l]
        have[lc]--
        if (need[lc] && have[lc] < need[lc]) formed--
        l++
      }
      result.push({ l, r, formed, minWin, shrink: false })
    }
    return result
  })()

  const step = useAutoStep(steps.length, 500)
  const { l, r, formed, minWin } = steps[step]

  return (
    <div>
      <div className="cell-row" style={{ marginBottom: 6, flexWrap: 'nowrap', overflowX: 'auto' }}>
        {s.split('').map((c, i) => (
          <div key={i}
            className={`cell ${i === r ? 'current' : i >= l && i <= r ? 'window' : i < l ? 'seen' : ''}`}
            style={{ width: 20, height: 26, minWidth: 20, fontSize: '0.7rem' }}>{c}</div>
        ))}
      </div>
      <Note ok={minWin.length > 0}>
        have {formed}/{Object.keys(need).length} chars · best=&quot;{minWin || '?'}&quot;
      </Note>
    </div>
  )
}
