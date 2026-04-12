import { useAutoStep, Label, Note, CellRow } from './primitives'

// ── Number of 1 Bits ──────────────────────────────────────────────────────────

export function NumberOf1BitsViz() {
  const n = 11  // binary: 1011
  const bits = n.toString(2).padStart(8, '0').split('')

  const steps = bits.map((b, i) => ({
    i,
    bit: b,
    count: bits.slice(0, i + 1).filter(x => x === '1').length,
    note: b === '1' ? `bit=${b} → count++` : `bit=${b} → skip`,
  }))

  const step = useAutoStep(steps.length, 700)
  const { i, bit, count, note } = steps[step]

  return (
    <div>
      <Label>n={n} = {n.toString(2)} (binary)</Label>
      <CellRow items={bits}
        cellClass={(v, idx) =>
          idx === i ? (v === '1' ? 'match' : 'current') : idx < i ? 'seen' : ''
        }
      />
      <Note ok={i === bits.length - 1}>
        {note} · count={count}
      </Note>
    </div>
  )
}

// ── Counting Bits ─────────────────────────────────────────────────────────────

export function CountingBitsViz() {
  const maxN = 8
  const dp = [0]
  for (let i = 1; i <= maxN; i++) dp.push(dp[i >> 1] + (i & 1))

  const step = useAutoStep(maxN, 700)

  return (
    <div>
      <Label>dp[i] = dp[i &gt;&gt; 1] + (i &amp; 1)</Label>
      <div style={{ display: 'flex', gap: 4, justifyContent: 'center', flexWrap: 'wrap' }}>
        {dp.slice(0, step + 2).map((v, i) => (
          <div key={i} style={{ textAlign: 'center' }}>
            <div style={{ fontSize: '0.55rem', color: '#64748b', marginBottom: 3 }}>{i}</div>
            <div className={`cell ${i === step + 1 ? 'current' : 'seen'}`}
              style={{ width: 30, height: 30, minWidth: 30 }}>{v}</div>
            <div style={{ fontSize: '0.55rem', color: '#64748b', marginTop: 3 }}>
              {i.toString(2)}
            </div>
          </div>
        ))}
      </div>
      <Note>
        dp[{step + 1}]=dp[{(step + 1) >> 1}]+{(step + 1) & 1}={dp[step + 1]} (bits in {step + 1})
      </Note>
    </div>
  )
}

// ── Reverse Bits ──────────────────────────────────────────────────────────────

export function ReverseBitsViz() {
  const n = 43261596
  const bits = n.toString(2).padStart(32, '0')

  const steps = Array.from({ length: 8 }, (_, i) => {
    const showing = bits.slice(0, (i + 1) * 4)
    const reversed = showing.split('').reverse().join('').padEnd(32, '?')
    return {
      progress: i + 1,
      original: bits.slice(i * 4, (i + 1) * 4),
      result: reversed,
      note: `reverse bits ${i * 4}–${(i + 1) * 4 - 1}`,
    }
  })
  // Final
  const finalReversed = bits.split('').reverse().join('')
  steps.push({ progress: 8, original: '', result: finalReversed, note: `reversed = ${parseInt(finalReversed, 2)}`, done: true })

  const step = useAutoStep(steps.length, 600)
  const { original, result, note, done } = steps[step]

  return (
    <div>
      <Label>original (first 16 bits shown)</Label>
      <div className="cell-row" style={{ flexWrap: 'wrap', marginBottom: 6 }}>
        {bits.slice(0, 16).split('').map((b, i) => (
          <div key={i} className={`cell ${i < steps[step].progress * 2 ? 'seen' : ''}`}
            style={{ width: 18, height: 22, minWidth: 18, fontSize: '0.65rem' }}>{b}</div>
        ))}
      </div>
      <Label>reversed (first 16 bits)</Label>
      <div className="cell-row" style={{ flexWrap: 'wrap', marginBottom: 6 }}>
        {result.slice(0, 16).split('').map((b, i) => (
          <div key={i} className={`cell ${b !== '?' ? (done ? 'match' : 'current') : ''}`}
            style={{ width: 18, height: 22, minWidth: 18, fontSize: '0.65rem' }}>{b}</div>
        ))}
      </div>
      <Note ok={done}>{note}</Note>
    </div>
  )
}

// ── Missing Number ────────────────────────────────────────────────────────────

export function MissingNumberViz() {
  const nums = [3, 0, 1]
  const n = nums.length  // missing: 2

  const steps = (() => {
    const result = []
    let xor = 0
    for (let i = 0; i <= n; i++) {
      xor ^= i
      result.push({ xor, step: i, phase: 'index', note: `XOR index ${i}: result=${xor}` })
    }
    for (let i = 0; i < nums.length; i++) {
      xor ^= nums[i]
      result.push({ xor, step: i, phase: 'value', note: `XOR value ${nums[i]}: result=${xor}` })
    }
    result.push({ xor, step: -1, phase: 'done', note: `missing = ${xor}` })
    return result
  })()

  const step = useAutoStep(steps.length, 700)
  const { xor, phase, note } = steps[step]

  return (
    <div>
      <Label>nums=[{nums.join(', ')}]  expected 0..{n}</Label>
      <CellRow items={nums} cellClass={() => 'seen'} />
      <div style={{ textAlign: 'center', margin: '10px 0' }}>
        <span style={{ fontSize: '0.65rem', color: '#64748b' }}>XOR result: </span>
        <span style={{
          fontFamily: 'JetBrains Mono', fontSize: '1.1rem', fontWeight: 700,
          color: phase === 'done' ? '#22c55e' : '#f59e0b',
        }}>{xor}</span>
      </div>
      <Note ok={phase === 'done'}>{note}</Note>
    </div>
  )
}

// ── Sum of Two Integers (without + or -) ─────────────────────────────────────

export function SumTwoIntegersViz() {
  const initA = 3, initB = 5  // 011 + 101 = 1000 = 8

  const steps = (() => {
    const result = []
    let a = initA, b = initB
    while (b !== 0) {
      const carry = (a & b) << 1
      const xorVal = a ^ b
      result.push({
        a: a.toString(2).padStart(4, '0'),
        b: b.toString(2).padStart(4, '0'),
        carry: carry.toString(2).padStart(4, '0'),
        xorVal: xorVal.toString(2).padStart(4, '0'),
        note: `a XOR b = ${xorVal}, carry = ${carry}`,
      })
      a = xorVal; b = carry
    }
    result.push({
      a: a.toString(2).padStart(4, '0'),
      b: '0000', carry: '0000', xorVal: a.toString(2).padStart(4, '0'),
      note: `carry=0 → done! result=${a}`,
      done: true,
    })
    return result
  })()

  const step = useAutoStep(steps.length, 1200)
  const { a, b, carry, xorVal, note, done } = steps[step]

  const BitRow = ({ label, bits, highlight }) => (
    <div style={{ display: 'flex', alignItems: 'center', gap: 8, justifyContent: 'center', marginBottom: 4 }}>
      <span style={{ width: 40, fontSize: '0.65rem', color: '#64748b', textAlign: 'right', fontFamily: 'JetBrains Mono' }}>{label}</span>
      <div style={{ display: 'flex', gap: 2 }}>
        {bits.split('').map((b, i) => (
          <div key={i} className={`cell ${highlight && b === '1' ? 'current' : 'seen'}`}
            style={{ width: 22, height: 22, minWidth: 22, fontSize: '0.7rem' }}>{b}</div>
        ))}
      </div>
    </div>
  )

  return (
    <div>
      <BitRow label="a" bits={a} />
      <BitRow label="b" bits={b} />
      <div style={{ textAlign: 'center', marginBottom: 4, fontSize: '0.65rem', color: '#2a2a3a' }}>────</div>
      <BitRow label="a^b" bits={xorVal} highlight />
      <BitRow label="carry" bits={carry} highlight />
      <Note ok={done}>{note}</Note>
    </div>
  )
}
