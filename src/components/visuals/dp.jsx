import { useState, useEffect } from 'react'
import { useAutoStep, Label, Note, CellRow } from './primitives'

// ── Climbing Stairs ─────────────────────────────────────���─────────────────────

export function ClimbingStairsViz() {
  const [n, setN] = useState(0)
  const dp = [1, 1]
  for (let i = 2; i <= 8; i++) dp.push(dp[i - 1] + dp[i - 2])

  useEffect(() => {
    const t = setInterval(() => setN(v => (v >= 8 ? 0 : v + 1)), 600)
    return () => clearInterval(t)
  }, [])

  return (
    <div>
      <div style={{ fontSize: '0.75rem', color: '#64748b', marginBottom: 10 }}>
        dp[n] = dp[n-1] + dp[n-2] — reach step n from step n-1 or n-2
      </div>
      <div style={{ display: 'flex', gap: 6, justifyContent: 'center', flexWrap: 'wrap', marginBottom: 8 }}>
        {dp.slice(0, n + 1).map((v, i) => (
          <div key={i} style={{ textAlign: 'center' }}>
            <div style={{ fontSize: '0.6rem', color: '#64748b', marginBottom: 3 }}>n={i}</div>
            <div className={`cell ${i === n ? 'current' : 'seen'}`}
              style={{ width: 36, height: 36, minWidth: 36 }}>{v}</div>
          </div>
        ))}
      </div>
      <div style={{ fontSize: '0.75rem', color: '#64748b' }}>
        For n={n}: <span style={{ color: '#a855f7', fontWeight: 600 }}>{dp[n]} ways</span>
        {n >= 2 && <span style={{ color: '#64748b' }}> = {dp[n-1]} + {dp[n-2]}</span>}
      </div>
    </div>
  )
}

// ── House Robber ──────────────────────────────────────────────────────────────

export function HouseRobberViz() {
  const houses = [2, 7, 9, 3, 1]

  const dpSteps = (() => {
    const dp = new Array(houses.length).fill(0)
    const result = []
    dp[0] = houses[0]
    result.push({ dp: [...dp], i: 0, note: `dp[0]=${houses[0]}` })
    if (houses.length > 1) {
      dp[1] = Math.max(houses[0], houses[1])
      result.push({ dp: [...dp], i: 1, note: `dp[1]=max(${houses[0]},${houses[1]})=${dp[1]}` })
    }
    for (let i = 2; i < houses.length; i++) {
      dp[i] = Math.max(dp[i - 1], dp[i - 2] + houses[i])
      result.push({ dp: [...dp], i, note: `dp[${i}]=max(${dp[i-1]}, ${dp[i-2]}+${houses[i]})=${dp[i]}` })
    }
    return result
  })()

  const step = useAutoStep(dpSteps.length, 900)
  const { dp, i, note } = dpSteps[step]

  return (
    <div>
      <Label>houses</Label>
      <CellRow items={houses} cellClass={(v, idx) => idx === i ? 'current' : idx < i ? 'seen' : ''} />
      <Label style={{ marginTop: 8 }}>dp (max rob up to index)</Label>
      <CellRow items={dp.map((v, idx) => idx <= i ? v : '?')}
        cellClass={(v, idx) => idx === i ? 'match' : idx < i ? 'seen' : ''}
      />
      <Note ok={i === houses.length - 1}>{note}</Note>
    </div>
  )
}

// ── Coin Change ───────────────────────────────────────────────────────────────

export function CoinChangeViz() {
  const coins = [1, 2, 5]
  const amount = 7

  const dpSteps = (() => {
    const dp = new Array(amount + 1).fill(Infinity)
    dp[0] = 0
    const result = []
    for (let a = 1; a <= amount; a++) {
      for (const coin of coins) {
        if (coin <= a && dp[a - coin] + 1 < dp[a]) {
          dp[a] = dp[a - coin] + 1
        }
      }
      result.push({ dp: dp.map(v => v === Infinity ? '∞' : v), a, note: `dp[${a}]=min coins to make ${a}: ${dp[a]}` })
    }
    return result
  })()

  const step = useAutoStep(dpSteps.length, 800)
  const { dp, a, note } = dpSteps[step]

  return (
    <div>
      <Label>coins=[{coins.join(', ')}]  amount={amount}</Label>
      <CellRow items={dp}
        cellClass={(v, i) => i === a ? 'current' : i < a ? (v === '∞' ? 'out' : 'seen') : ''}
        ptrLabel={i => i === 0 ? '0' : ''}
      />
      <Note ok={a === amount}>{note}</Note>
    </div>
  )
}

// ── Longest Increasing Subsequence ────────────────────────────────────────────

export function LISViz() {
  const nums = [10, 9, 2, 5, 3, 7, 101, 18]

  const dpSteps = (() => {
    const dp = new Array(nums.length).fill(1)
    const result = []
    for (let i = 0; i < nums.length; i++) {
      for (let j = 0; j < i; j++) {
        if (nums[j] < nums[i]) dp[i] = Math.max(dp[i], dp[j] + 1)
      }
      result.push({ dp: [...dp], i, note: `dp[${i}]=${dp[i]} (LIS ending at ${nums[i]})` })
    }
    return result
  })()

  const step = useAutoStep(dpSteps.length, 800)
  const { dp, i, note } = dpSteps[step]
  const maxLIS = Math.max(...dp.slice(0, i + 1))

  return (
    <div>
      <Label>nums</Label>
      <CellRow items={nums} cellClass={(v, idx) => idx === i ? 'current' : idx < i ? 'seen' : ''} />
      <Label style={{ marginTop: 8 }}>dp[i] = LIS length ending at i</Label>
      <CellRow items={dp.map((v, idx) => idx <= i ? v : '?')}
        cellClass={(v, idx) => idx === i ? 'match' : idx < i ? 'seen' : ''}
      />
      <Note ok={i === nums.length - 1}>{note} · max={maxLIS}</Note>
    </div>
  )
}

// ── Word Break ────────────────────────────────────────────────────────────────

export function WordBreakViz() {
  const s = 'leetcode'
  const wordDict = new Set(['leet', 'code'])

  const dpSteps = (() => {
    const dp = new Array(s.length + 1).fill(false)
    dp[0] = true
    const result = []
    for (let i = 1; i <= s.length; i++) {
      for (let j = 0; j < i; j++) {
        if (dp[j] && wordDict.has(s.slice(j, i))) {
          dp[i] = true
          break
        }
      }
      result.push({
        dp: [...dp],
        i,
        note: dp[i]
          ? `dp[${i}]=true: "${s.slice(0, i)}" can be segmented`
          : `dp[${i}]=false`,
      })
    }
    return result
  })()

  const step = useAutoStep(dpSteps.length, 800)
  const { dp, i, note } = dpSteps[step]

  return (
    <div>
      <Label>s="{s}"  dict=[leet, code]</Label>
      <div className="cell-row" style={{ marginBottom: 6 }}>
        {s.split('').map((c, idx) => (
          <div key={idx} className={`cell ${idx < i ? 'seen' : ''}`}
            style={{ width: 26, height: 26, minWidth: 26, fontSize: '0.8rem' }}>{c}</div>
        ))}
      </div>
      <Label>dp[i] = can form s[0..i]</Label>
      <CellRow items={dp.slice(0, i + 1).map(v => v ? 'T' : 'F')}
        cellClass={v => v === 'T' ? 'match' : 'out'}
      />
      <Note ok={i === s.length && dp[s.length]}>{note}</Note>
    </div>
  )
}
