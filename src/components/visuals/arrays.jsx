import { useAutoStep, Label, Note, CellRow, HashRow } from './primitives'

// ── Contains Duplicate ────────────────────────────────────────────────────────

export function ContainsDuplicateViz() {
  const arr = [4, 1, 9, 2, 1, 7]

  const steps = (() => {
    const result = [], seen = new Set()
    for (let i = 0; i < arr.length; i++) {
      const isDup = seen.has(arr[i])
      result.push({ i, seenMap: Object.fromEntries([...seen].map(v => [v, '✓'])), isDup })
      if (isDup) break
      seen.add(arr[i])
    }
    return result
  })()

  const step = useAutoStep(steps.length)
  const { i, seenMap, isDup } = steps[step]

  return (
    <div>
      <CellRow items={arr}
        cellClass={(v, idx) => idx === i ? (isDup ? 'match' : 'current') : idx < i ? 'seen' : ''}
        ptrLabel={idx => idx === i ? 'curr' : ''}
      />
      <HashRow map={seenMap} style={{ marginTop: 10 }} />
      <Note ok={isDup}>
        {isDup
          ? `arr[${i}]=${arr[i]} already in set → duplicate found!`
          : `arr[${i}]=${arr[i]} not seen → add to set`}
      </Note>
    </div>
  )
}

// ── Valid Anagram ─────────────────────────────────────────────────────────────

export function ValidAnagramViz() {
  const s = 'anagram', t = 'nagaram'

  const steps = (() => {
    const result = [], freq = {}
    for (let i = 0; i < s.length; i++) {
      freq[s[i]] = (freq[s[i]] || 0) + 1
      result.push({ phase: 's', i, freq: { ...freq }, note: `count['${s[i]}']++ → ${freq[s[i]]}` })
    }
    for (let i = 0; i < t.length; i++) {
      freq[t[i]]--
      if (freq[t[i]] === 0) delete freq[t[i]]
      result.push({ phase: 't', i, freq: { ...freq }, note: `count['${t[i]}']-- → ${freq[t[i]] ?? 0}` })
    }
    result.push({ phase: 'done', i: -1, freq: {}, note: 'All counts zero → valid anagram!' })
    return result
  })()

  const step = useAutoStep(steps.length)
  const { phase, i, freq, note } = steps[step]

  return (
    <div>
      <div style={{ display: 'flex', gap: 16, justifyContent: 'center', marginBottom: 8 }}>
        <div>
          <Label>s</Label>
          <div className="cell-row">
            {s.split('').map((c, idx) => (
              <div key={idx} className={`cell ${phase === 's' && idx === i ? 'current' : (phase === 't' || (phase === 's' && idx < i)) ? 'seen' : ''}`}
                style={{ width: 26, height: 26, minWidth: 26, fontSize: '0.8rem' }}>{c}</div>
            ))}
          </div>
        </div>
        <div>
          <Label>t</Label>
          <div className="cell-row">
            {t.split('').map((c, idx) => (
              <div key={idx} className={`cell ${phase === 't' && idx === i ? 'current' : phase === 't' && idx < i ? 'seen' : phase === 'done' ? 'match' : ''}`}
                style={{ width: 26, height: 26, minWidth: 26, fontSize: '0.8rem' }}>{c}</div>
            ))}
          </div>
        </div>
      </div>
      <HashRow map={freq} />
      <Note ok={phase === 'done'}>{note}</Note>
    </div>
  )
}

// ── Group Anagrams ────────────────────────────────────────────────────────────

export function GroupAnagramsViz() {
  const words = ['eat', 'tea', 'tan', 'ate', 'nat', 'bat']

  const steps = words.map((word, i) => {
    const groups = {}
    for (let j = 0; j <= i; j++) {
      const key = words[j].split('').sort().join('')
      groups[key] = (groups[key] || []).concat(words[j])
    }
    return { word, key: word.split('').sort().join(''), groups }
  })

  const step = useAutoStep(steps.length)
  const { word, key, groups } = steps[step]

  return (
    <div>
      <div style={{ fontSize: '0.75rem', color: '#94a3b8', marginBottom: 10, textAlign: 'center' }}>
        <span style={{ color: '#f59e0b', fontFamily: 'JetBrains Mono' }}>"{word}"</span>
        {' → sort → '}
        <span style={{ color: '#a78bfa', fontFamily: 'JetBrains Mono' }}>"{key}"</span>
      </div>
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8, justifyContent: 'center' }}>
        {Object.entries(groups).map(([k, ws]) => (
          <div key={k} style={{
            background: 'rgba(99,102,241,0.08)', border: '1px solid rgba(99,102,241,0.2)',
            borderRadius: 8, padding: '6px 10px', textAlign: 'center',
          }}>
            <div style={{ fontSize: '0.6rem', color: '#6366f1', fontFamily: 'JetBrains Mono', marginBottom: 4 }}>{k}</div>
            <div style={{ display: 'flex', gap: 6, justifyContent: 'center' }}>
              {ws.map(w => (
                <span key={w} style={{
                  fontFamily: 'JetBrains Mono', fontSize: '0.75rem',
                  color: w === word ? '#f59e0b' : '#94a3b8',
                  fontWeight: w === word ? 700 : 400,
                }}>{w}</span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

// ── Top K Frequent ────────────────────────────────────────────────────────────

export function TopKFrequentViz() {
  const arr = [1, 1, 1, 2, 2, 3]
  const k = 2

  const freqSteps = (() => {
    const result = [], freq = {}
    for (const v of arr) {
      freq[v] = (freq[v] || 0) + 1
      result.push({ ...freq })
    }
    return result
  })()

  const totalSteps = freqSteps.length + 1
  const step = useAutoStep(totalSteps, 700)

  const isBucket = step >= freqSteps.length
  const curFreq = freqSteps[Math.min(step, freqSteps.length - 1)]
  const topK = Object.entries(curFreq)
    .sort((a, b) => b[1] - a[1])
    .slice(0, k)
    .map(([v]) => +v)

  return (
    <div>
      <CellRow items={arr}
        cellClass={(v, i) => {
          if (isBucket) return topK.includes(v) ? 'match' : 'seen'
          return i <= step ? 'seen' : ''
        }}
      />
      <HashRow map={curFreq} style={{ marginTop: 10 }} />
      <Note ok={isBucket}>
        {isBucket
          ? `top-${k} = [${topK.join(', ')}]`
          : `count arr[${step}]=${arr[step]} → freq=${curFreq[arr[step]]}`}
      </Note>
    </div>
  )
}

// ── Product Except Self ───────────────────────────────────────────────────────

export function ProductExceptSelfViz() {
  const arr = [1, 2, 3, 4]
  const prefix = [1, 1, 2, 6]
  const suffix = [24, 12, 4, 1]
  const result = [24, 12, 8, 6]
  const n = arr.length

  // Steps: 0..n-1 = building prefix, n..2n-1 = suffix multiply, 2n = done
  const totalSteps = n * 2 + 1
  const step = useAutoStep(totalSteps, 700)

  let display, note, phase, activeIdx
  if (step < n) {
    phase = 'prefix'; activeIdx = step
    display = prefix.map((v, i) => i <= activeIdx ? v : '?')
    note = `prefix[${activeIdx}] = ${prefix[activeIdx]}  (product of all left of index ${activeIdx})`
  } else if (step < n * 2) {
    phase = 'suffix'; activeIdx = n * 2 - 1 - step
    display = result.map((v, i) => i >= activeIdx ? v : prefix[i])
    note = `× suffix[${activeIdx}]: result[${activeIdx}] = ${result[activeIdx]}`
  } else {
    phase = 'done'; activeIdx = -1
    display = result
    note = `result = [${result.join(', ')}]`
  }

  return (
    <div>
      <Label>input: [{arr.join(', ')}]</Label>
      <CellRow items={display}
        cellClass={(v, i) => {
          if (phase === 'done') return 'match'
          if (phase === 'prefix') return i < activeIdx ? 'seen' : i === activeIdx ? 'current' : ''
          return i > activeIdx ? 'seen' : i === activeIdx ? 'current' : 'seen'
        }}
      />
      <Note ok={phase === 'done'}>{note}</Note>
    </div>
  )
}

// ── Longest Consecutive Sequence ──────────────────────────────────────────────

export function LongestConsecutiveViz() {
  const arr = [100, 4, 200, 1, 3, 2]
  const numSet = new Set(arr)

  const chains = (() => {
    const starts = arr.filter(n => !numSet.has(n - 1))
    return starts.map(start => {
      const chain = []
      let n = start
      while (numSet.has(n)) { chain.push(n); n++ }
      return chain
    }).sort((a, b) => a[0] - b[0])
  })()

  const steps = chains.map(chain => ({
    chain,
    isLongest: chain.length === Math.max(...chains.map(c => c.length)),
    note: `start=${chain[0]} (${chain[0] - 1} ∉ set) → streak [${chain.join('→')}] len=${chain.length}`,
  }))

  const step = useAutoStep(steps.length)
  const { chain, isLongest, note } = steps[step]
  const chainSet = new Set(chain)

  return (
    <div>
      <Label>{'set: {' + [...numSet].sort((a, b) => a - b).join(', ') + '}'}</Label>
      <CellRow items={[...arr].sort((a, b) => a - b)}
        cellClass={v => chainSet.has(v) ? (isLongest ? 'match' : 'current') : 'seen'}
      />
      <Note ok={isLongest}>{note}</Note>
    </div>
  )
}
