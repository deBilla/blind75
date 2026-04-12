import { useState, useEffect } from 'react'
import { useAutoStep, Label, Note, CellRow } from './primitives'

// ── Valid Parentheses ─────────────────────────────────────────────────────────

export function StackViz({ input = '([{}])' }) {
  const [step, setStep] = useState(0)
  const chars = input.split('')
  const pairs = { ')': '(', ']': '[', '}': '{' }

  useEffect(() => {
    const t = setInterval(() => setStep(s => (s >= chars.length ? 0 : s + 1)), 700)
    return () => clearInterval(t)
  }, [chars.length])

  const stack = []
  let valid = true
  for (let i = 0; i < step; i++) {
    const c = chars[i]
    if ('([{'.includes(c)) stack.push(c)
    else if (!stack.length || stack.at(-1) !== pairs[c]) { valid = false; break }
    else stack.pop()
  }

  return (
    <div style={{ display: 'flex', gap: 24, alignItems: 'flex-end', flexWrap: 'wrap' }}>
      <div>
        <div style={{ fontSize: '0.65rem', color: '#64748b', marginBottom: 6 }}>Input</div>
        <div className="cell-row">
          {chars.map((c, i) => (
            <div key={i}
              className={`cell ${i < step ? 'seen' : ''} ${i === step - 1 ? 'current' : ''}`}
              style={{ fontFamily: 'JetBrains Mono', fontWeight: 700 }}>{c}</div>
          ))}
        </div>
      </div>
      <div>
        <div style={{ fontSize: '0.65rem', color: '#64748b', marginBottom: 6 }}>Stack</div>
        <div style={{ display: 'flex', flexDirection: 'column-reverse', gap: 3, minHeight: 40 }}>
          {stack.map((c, i) => (
            <div key={i} className={`stack-item${i === stack.length - 1 ? ' top' : ''}`}
              style={{ width: 40, height: 28, fontSize: '0.9rem' }}>{c}</div>
          ))}
        </div>
      </div>
      <div style={{ fontSize: '0.75rem', color: valid ? '#22c55e' : '#ef4444', fontWeight: 600 }}>
        {step === chars.length && stack.length === 0 ? '✓ Valid!' : step === chars.length ? '✗ Invalid' : '…'}
      </div>
    </div>
  )
}

// ── Min Stack ─────────────────────────────────────────────────────────────────

export function MinStackViz() {
  const ops = [
    { type: 'push', val: 5 }, { type: 'push', val: 3 }, { type: 'push', val: 7 },
    { type: 'getMin' },
    { type: 'push', val: 2 }, { type: 'getMin' },
    { type: 'pop' }, { type: 'getMin' },
  ]

  const states = (() => {
    const result = []
    const stack = [], minStack = []
    for (const op of ops) {
      if (op.type === 'push') {
        stack.push(op.val)
        minStack.push(Math.min(op.val, minStack.length ? minStack.at(-1) : op.val))
        result.push({ stack: [...stack], minStack: [...minStack], op: `push(${op.val})`, result: null })
      } else if (op.type === 'pop') {
        stack.pop(); minStack.pop()
        result.push({ stack: [...stack], minStack: [...minStack], op: 'pop()', result: null })
      } else {
        result.push({ stack: [...stack], minStack: [...minStack], op: 'getMin()', result: minStack.at(-1) })
      }
    }
    return result
  })()

  const step = useAutoStep(states.length)
  const { stack, minStack, op, result } = states[step]

  const StackCol = ({ items, color, bg }) => (
    <div style={{ display: 'flex', flexDirection: 'column-reverse', gap: 3, minHeight: 90, justifyContent: 'flex-start' }}>
      {items.map((v, i) => (
        <div key={i} className={`stack-item${i === items.length - 1 ? ' top' : ''}`}
          style={{ width: 68, height: 26, fontSize: '0.8rem', borderColor: color, color, background: bg }}>
          {v}
        </div>
      ))}
    </div>
  )

  return (
    <div style={{ display: 'flex', gap: 20, justifyContent: 'center', alignItems: 'flex-start', flexWrap: 'wrap' }}>
      <div><Label>stack</Label><StackCol items={stack} color="#ef4444" bg="rgba(239,68,68,0.1)" /></div>
      <div><Label>min stack</Label><StackCol items={minStack} color="#a78bfa" bg="rgba(99,102,241,0.1)" /></div>
      <Note ok={result !== null} style={{ alignSelf: 'center' }}>
        {op}{result !== null ? ` → ${result}` : ''}
      </Note>
    </div>
  )
}

// ── Daily Temperatures ────────────────────────────────────────────────────────

export function DailyTemperaturesViz() {
  const temps = [73, 74, 75, 71, 72, 76, 73]

  const steps = (() => {
    const result = []
    const stack = [], ans = new Array(temps.length).fill(0)
    for (let i = 0; i < temps.length; i++) {
      while (stack.length && temps[stack.at(-1)] < temps[i]) {
        ans[stack.pop()] = i - stack.length // intentional: reuse after pop
      }
      // recompute ans properly
      const snap = new Array(temps.length).fill(0)
      const tmpStack = []
      for (let j = 0; j <= i; j++) {
        while (tmpStack.length && temps[tmpStack.at(-1)] < temps[j]) {
          snap[tmpStack.pop()] = j - tmpStack.length
        }
        tmpStack.push(j)
      }
      stack.length = 0
      for (let j = 0; j <= i; j++) {
        while (stack.length && temps[stack.at(-1)] < temps[j]) stack.pop()
        stack.push(j)
      }
      result.push({ i, ans: [...snap], stackVals: [...stack].map(j => temps[j]) })
    }
    return result
  })()

  // Simpler recompute
  const cleanSteps = (() => {
    const result = []
    for (let i = 0; i < temps.length; i++) {
      const stk = [], snap = new Array(temps.length).fill(0)
      for (let j = 0; j <= i; j++) {
        while (stk.length && temps[stk.at(-1)] < temps[j]) snap[stk.pop()] = j - stk.length + 1
        stk.push(j)
      }
      // fix: recompute cleanly
      const ans = new Array(temps.length).fill(0)
      const s2 = []
      for (let j = 0; j <= i; j++) {
        while (s2.length && temps[s2.at(-1)] < temps[j]) { ans[s2.at(-1)] = j - s2.at(-1); s2.pop() }
        s2.push(j)
      }
      result.push({ i, ans, stack: s2.map(j => temps[j]) })
    }
    return result
  })()

  const step = useAutoStep(cleanSteps.length, 800)
  const { i, ans, stack } = cleanSteps[step]

  return (
    <div>
      <Label>temperatures</Label>
      <CellRow items={temps} cellClass={(v, idx) => idx === i ? 'current' : idx < i ? 'seen' : ''} />
      <Label style={{ marginTop: 8 }}>answer (days until warmer)</Label>
      <CellRow items={ans} cellClass={v => v > 0 ? 'match' : ''} />
      <Note>stack (mono-decreasing): [{stack.join(', ')}]</Note>
    </div>
  )
}

// ── Evaluate Reverse Polish Notation ─────────────────────────────────────────

export function EvaluateRPNViz() {
  const tokens = ['2', '1', '+', '3', '*']

  const steps = (() => {
    const result = [], stack = []
    for (let i = 0; i < tokens.length; i++) {
      const tok = tokens[i]
      if (['+', '-', '*', '/'].includes(tok)) {
        const b = stack.pop(), a = stack.pop()
        const res = tok === '+' ? a + b : tok === '-' ? a - b : tok === '*' ? a * b : Math.trunc(a / b)
        stack.push(res)
        result.push({ tokIdx: i, stack: [...stack], note: `${a} ${tok} ${b} = ${res}` })
      } else {
        stack.push(+tok)
        result.push({ tokIdx: i, stack: [...stack], note: `push ${tok}` })
      }
    }
    return result
  })()

  const step = useAutoStep(steps.length)
  const { tokIdx, stack, note } = steps[step]

  return (
    <div>
      <div className="cell-row" style={{ marginBottom: 10 }}>
        {tokens.map((t, i) => (
          <div key={i} className={`cell ${i === tokIdx ? 'current' : i < tokIdx ? 'seen' : ''}`}
            style={{ width: 28, height: 28, minWidth: 28 }}>{t}</div>
        ))}
      </div>
      <div style={{ display: 'flex', flexDirection: 'column-reverse', gap: 3, alignItems: 'center', minHeight: 60 }}>
        {stack.map((v, i) => (
          <div key={i} className={`stack-item${i === stack.length - 1 ? ' top' : ''}`}
            style={{ width: 60, height: 26, fontSize: '0.8rem' }}>{v}</div>
        ))}
      </div>
      <Note ok={step === steps.length - 1}>{note}</Note>
    </div>
  )
}

// ── Generate Parentheses ──────────────────────────────────────────────────────

export function GenerateParenthesesViz() {
  const n = 3

  const steps = (() => {
    const result = []
    function trace(cur, open, close) {
      result.push({ cur, open, close, done: cur.length === 2 * n })
      if (cur.length === 2 * n) return
      if (open < n) trace(cur + '(', open + 1, close)
      if (close < open) trace(cur + ')', open, close + 1)
    }
    trace('', 0, 0)
    return result
  })()

  const step = useAutoStep(steps.length, 600)
  const { cur, open, close, done } = steps[step]

  return (
    <div>
      <div style={{ textAlign: 'center', marginBottom: 8 }}>
        <span style={{
          fontFamily: 'JetBrains Mono', fontSize: '1.3rem', letterSpacing: 4,
          color: done ? '#22c55e' : '#f59e0b', fontWeight: 700,
        }}>
          {cur || '…'}
        </span>
      </div>
      <Note ok={done || undefined}>
        open={open}/{n} · close={close}/{n}
        {!done && open < n && ` · can add '('`}
        {!done && close < open && ` · can add ')'`}
        {done && ' · valid!'}
      </Note>
    </div>
  )
}

// ── Largest Rectangle in Histogram ───────────────────────────────────────────

export function LargestRectangleViz() {
  const heights = [2, 1, 5, 6, 2, 3]

  const steps = (() => {
    const result = []
    const stack = [] // [startIdx, height]
    let maxArea = 0
    for (let i = 0; i <= heights.length; i++) {
      const h = i === heights.length ? 0 : heights[i]
      let start = i
      while (stack.length && stack.at(-1)[1] > h) {
        const [idx, ht] = stack.pop()
        const area = ht * (i - idx)
        maxArea = Math.max(maxArea, area)
        start = idx
        result.push({ i, maxArea, highlight: idx, width: i - idx, height: ht })
      }
      stack.push([start, h])
      result.push({ i, maxArea, highlight: -1, width: 0, height: 0 })
    }
    return result
  })()

  const step = useAutoStep(steps.length, 500)
  const { i, maxArea, highlight, width, height } = steps[step]

  return (
    <div>
      <div style={{ display: 'flex', alignItems: 'flex-end', gap: 3, justifyContent: 'center', marginBottom: 8 }}>
        {heights.map((h, idx) => (
          <div key={idx} style={{
            width: 26, height: h * 16,
            background: idx === highlight ? 'rgba(34,197,94,0.35)'
              : idx === i ? 'rgba(245,158,11,0.35)' : 'rgba(99,102,241,0.25)',
            border: `1px solid ${idx === highlight ? '#22c55e' : idx === i ? '#f59e0b' : '#2a2a3a'}`,
            borderRadius: '3px 3px 0 0', transition: 'all 0.2s',
          }} />
        ))}
      </div>
      <Note ok={maxArea > 0}>
        maxArea={maxArea}
        {highlight >= 0 ? ` · rect w=${width}×h=${height}=${width * height}` : ''}
      </Note>
    </div>
  )
}
