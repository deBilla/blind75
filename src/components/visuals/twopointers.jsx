import { useAutoStep, Label, Note, CellRow } from './primitives'

// ── Valid Palindrome ──────────────────────────────────────────────────────────

export function ValidPalindromeViz() {
  const s = 'racecar'
  const chars = s.split('')

  const steps = (() => {
    const result = []
    let l = 0, r = chars.length - 1
    while (l <= r) {
      const match = chars[l] === chars[r]
      result.push({ l, r, match, done: l >= r })
      if (!match) { result.push({ l, r, match: false, failed: true }); break }
      l++; r--
    }
    if (!result.at(-1).failed) result.push({ l: 3, r: 3, match: true, done: true, final: true })
    return result
  })()

  const step = useAutoStep(steps.length)
  const { l, r, match, done, final, failed } = steps[step]

  return (
    <div>
      <CellRow items={chars}
        cellClass={(v, i) => {
          if (final) return 'match'
          if (failed && (i === l || i === r)) return 'out'
          if (i === l && i === r) return 'match'
          if (i === l) return 'left-ptr'
          if (i === r) return 'right-ptr'
          if (i < l || i > r) return 'seen'
          return ''
        }}
        ptrLabel={i => i === l && i === r ? 'l=r' : i === l ? 'l' : i === r ? 'r' : ''}
      />
      <Note ok={final || (!failed && done)}>
        {final
          ? `"${s}" is a palindrome!`
          : failed
          ? `'${chars[l]}' ≠ '${chars[r]}' → not a palindrome`
          : `'${chars[l]}' === '${chars[r]}' ✓ → move inward`}
      </Note>
    </div>
  )
}

// ── 3Sum ─────────────────────────────────────────────────────────────────────

export function ThreeSumViz() {
  const arr = [-4, -1, -1, 0, 1, 2] // pre-sorted

  // Fix i=1 (arr[1]=-1), two-pointer scan on rest
  const steps = (() => {
    const result = []
    const fixI = 1
    let l = fixI + 1, r = arr.length - 1
    while (l < r) {
      const sum = arr[fixI] + arr[l] + arr[r]
      result.push({ l, r, sum, found: sum === 0 })
      if (sum === 0) { result.push({ l, r, sum: 0, found: true, final: true }); break }
      else if (sum < 0) l++
      else r--
    }
    return result
  })()

  const step = useAutoStep(steps.length)
  const { l, r, sum, found, final } = steps[step]
  const fixI = 1

  return (
    <div>
      <Label>sorted · fix i={fixI} (arr[{fixI}]={arr[fixI]})</Label>
      <CellRow items={arr}
        cellClass={(v, i) => {
          if (final && (i === fixI || i === l || i === r)) return 'match'
          if (i === fixI) return 'mid'
          if (i === l) return 'left-ptr'
          if (i === r) return 'right-ptr'
          return ''
        }}
        ptrLabel={i => i === fixI ? 'i' : i === l ? 'l' : i === r ? 'r' : ''}
      />
      <Note ok={found}>
        {found
          ? `${arr[fixI]}+${arr[l]}+${arr[r]}=0 → triplet found!`
          : sum < 0
          ? `sum=${sum} < 0 → move L right`
          : `sum=${sum} > 0 → move R left`}
      </Note>
    </div>
  )
}

// ── Container With Most Water ─────────────────────────────────────────────────

export function ContainerWithWaterViz() {
  const heights = [1, 8, 6, 2, 5, 4, 8, 3, 7]

  const steps = (() => {
    const result = []
    let l = 0, r = heights.length - 1, maxArea = 0
    while (l < r) {
      const area = Math.min(heights[l], heights[r]) * (r - l)
      maxArea = Math.max(maxArea, area)
      result.push({ l, r, area, maxArea })
      if (heights[l] < heights[r]) l++
      else r--
    }
    return result
  })()

  const step = useAutoStep(steps.length, 700)
  const { l, r, area, maxArea } = steps[step]

  return (
    <div>
      <div style={{ display: 'flex', alignItems: 'flex-end', gap: 3, justifyContent: 'center', marginBottom: 8 }}>
        {heights.map((h, i) => (
          <div key={i} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 2 }}>
            <div style={{
              width: 22, height: h * 12,
              background: i === l || i === r
                ? 'rgba(99,102,241,0.6)'
                : i > l && i < r ? 'rgba(96,165,250,0.15)' : 'rgba(99,102,241,0.15)',
              border: `1px solid ${i === l || i === r ? '#6366f1' : '#2a2a3a'}`,
              borderRadius: '3px 3px 0 0', transition: 'all 0.3s',
            }} />
            <div className="ptr-label"
              style={{ color: i === l ? '#10b981' : i === r ? '#a78bfa' : 'transparent' }}>
              {i === l ? 'l' : i === r ? 'r' : '_'}
            </div>
          </div>
        ))}
      </div>
      <Note>
        area={area} · max={maxArea} ·{' '}
        {heights[l] < heights[r] ? 'L shorter → move L right' : 'R shorter → move R left'}
      </Note>
    </div>
  )
}

// ── Trapping Rain Water ───────────────────────────────────────────────────────

export function TrappingRainViz() {
  const heights = [0, 1, 0, 2, 1, 0, 1, 3, 2, 1, 2, 1]
  const n = heights.length

  const leftMax = heights.reduce((acc, h, i) => {
    acc.push(i === 0 ? h : Math.max(acc[i - 1], h)); return acc
  }, [])
  const rightMax = heights.reduceRight((acc, h, i) => {
    acc[i] = i === n - 1 ? h : Math.max(acc[i + 1], h); return acc
  }, new Array(n))
  const water = heights.map((h, i) => Math.max(0, Math.min(leftMax[i], rightMax[i]) - h))
  const total = water.reduce((a, b) => a + b, 0)

  const step = useAutoStep(n, 500)

  return (
    <div>
      <div style={{ display: 'flex', alignItems: 'flex-end', gap: 2, justifyContent: 'center', marginBottom: 8 }}>
        {heights.map((hv, i) => {
          const wh = water[i]
          return (
            <div key={i} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
              {wh > 0 && (
                <div style={{
                  width: 16, height: wh * 9,
                  background: i <= step ? 'rgba(96,165,250,0.45)' : 'transparent',
                  border: i <= step ? '1px solid rgba(96,165,250,0.4)' : 'none',
                  transition: 'all 0.3s',
                }} />
              )}
              <div style={{
                width: 16, height: hv * 9 || 4,
                background: i === step ? 'rgba(99,102,241,0.7)' : 'rgba(99,102,241,0.25)',
                border: `1px solid ${i === step ? '#6366f1' : '#2a2a3a'}`,
                borderRadius: '2px 2px 0 0',
              }} />
            </div>
          )
        })}
      </div>
      <Note>
        i={step}: lMax={leftMax[step]}, rMax={rightMax[step]},
        water={water[step]} · total={total}
      </Note>
    </div>
  )
}
