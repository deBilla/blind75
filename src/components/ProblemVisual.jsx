import { useState } from 'react'

// ── Category visual files ─────────────────────────────────────────────────────
import {
  ContainsDuplicateViz, ValidAnagramViz, GroupAnagramsViz,
  TopKFrequentViz, ProductExceptSelfViz, LongestConsecutiveViz,
} from './visuals/arrays'
import {
  ValidPalindromeViz, ThreeSumViz, ContainerWithWaterViz, TrappingRainViz,
} from './visuals/twopointers'
import { LongestReplacingViz, MinWindowViz } from './visuals/sliding'
import {
  StackViz, MinStackViz, DailyTemperaturesViz, EvaluateRPNViz,
  GenerateParenthesesViz, LargestRectangleViz,
} from './visuals/stack'
import {
  BinarySearchViz, SearchRotatedViz, KokoBananasViz, FindMinRotatedViz,
} from './visuals/binarysearch'
import {
  LinkedListReversalViz, MergeTwoListsViz, ReorderListViz,
  RemoveNthViz, LinkedListCycleViz,
} from './visuals/linkedlist'
import {
  InvertTreeViz, MaxDepthViz, SameTreeViz, LevelOrderViz,
  KthSmallestViz, LCABSTViz, BinaryTreeMaxPathViz, BSTViz,
} from './visuals/trees'
import { FindMedianViz, MergeKListsViz } from './visuals/heap'
import { CombinationSumViz, WordSearchViz } from './visuals/backtracking'
import {
  NumberOfIslandsViz, CloneGraphViz, CourseScheduleViz, PacificAtlanticViz,
} from './visuals/graphs'
import {
  ClimbingStairsViz, HouseRobberViz, CoinChangeViz, LISViz, WordBreakViz,
} from './visuals/dp'
import { MergeIntervalsViz, InsertIntervalViz, NonOverlappingViz } from './visuals/intervals'
import {
  NumberOf1BitsViz, CountingBitsViz, ReverseBitsViz,
  MissingNumberViz, SumTwoIntegersViz,
} from './visuals/bits'
import { WindowViz, TwoSumViz } from './visuals/legacy'

// ── Step-through trace ────────────────────────────────────────────────────────

export function TraceVisual({ trace }) {
  const [step, setStep] = useState(0)
  if (!trace || trace.length === 0) return null

  return (
    <div>
      <div style={{ display: 'flex', gap: 8, marginBottom: 10, alignItems: 'center', flexWrap: 'wrap' }}>
        <span style={{ fontSize: '0.75rem', color: '#64748b' }}>Step {step + 1} of {trace.length}</span>
        <div style={{ display: 'flex', gap: 6 }}>
          <button onClick={() => setStep(s => Math.max(0, s - 1))}
            style={{ background: 'none', border: '1px solid #2a2a3a', color: '#64748b', padding: '3px 10px', borderRadius: 6, cursor: 'pointer', fontSize: '0.75rem' }}
            disabled={step === 0}>← Prev</button>
          <button onClick={() => setStep(s => Math.min(trace.length - 1, s + 1))}
            style={{ background: 'rgba(99,102,241,0.1)', border: '1px solid rgba(99,102,241,0.3)', color: '#a78bfa', padding: '3px 10px', borderRadius: 6, cursor: 'pointer', fontSize: '0.75rem' }}
            disabled={step === trace.length - 1}>Next →</button>
          <button onClick={() => setStep(0)}
            style={{ background: 'none', border: '1px solid #2a2a3a', color: '#64748b', padding: '3px 10px', borderRadius: 6, cursor: 'pointer', fontSize: '0.75rem' }}>↺ Reset</button>
        </div>
      </div>

      <div style={{ height: 3, background: '#1a1a24', borderRadius: 2, marginBottom: 12, overflow: 'hidden' }}>
        <div style={{ height: '100%', background: '#6366f1', borderRadius: 2, width: `${((step + 1) / trace.length) * 100}%`, transition: 'width 0.3s' }} />
      </div>

      <div className="trace-table">
        <div className="trace-header"><span>State</span><span>Action</span><span>Result</span></div>
        {trace.map((t, i) => (
          <div key={i} className="trace-row"
            style={{ opacity: i > step ? 0.3 : 1, background: i === step ? 'rgba(99,102,241,0.06)' : '' }}>
            <span className="step-col">{t.step}</span>
            <span className="action-col">{t.action}</span>
            <span className="state-col">{t.state}</span>
          </div>
        ))}
      </div>
    </div>
  )
}

// ── Visual map: problemId → component ────────────────────────────────────────

const vizMap = {
  // Arrays & Hashing
  'contains-duplicate':       ContainsDuplicateViz,
  'valid-anagram':            ValidAnagramViz,
  'two-sum':                  TwoSumViz,
  'group-anagrams':           GroupAnagramsViz,
  'top-k-frequent':           TopKFrequentViz,
  'product-except-self':      ProductExceptSelfViz,
  'longest-consecutive':      LongestConsecutiveViz,

  // Two Pointers
  'valid-palindrome':         ValidPalindromeViz,
  'three-sum':                ThreeSumViz,
  'container-with-water':     ContainerWithWaterViz,
  'trapping-rain-water':      TrappingRainViz,

  // Sliding Window
  'best-time-stock':          () => <WindowViz arr={[7,1,5,3,6,4]} k={1} />,
  'longest-substring-no-repeat': () => <WindowViz arr={[3,1,2,3,4,2]} k={3} />,
  'longest-repeating-replacement': LongestReplacingViz,
  'minimum-window-substring': MinWindowViz,

  // Stack
  'valid-parentheses':        StackViz,
  'min-stack':                MinStackViz,
  'daily-temperatures':       DailyTemperaturesViz,
  'evaluate-rpn':             EvaluateRPNViz,
  'generate-parentheses':     GenerateParenthesesViz,
  'largest-rectangle-histogram': LargestRectangleViz,

  // Binary Search
  'binary-search':            BinarySearchViz,
  'search-rotated':           () => <SearchRotatedViz arr={[4,5,6,7,0,1,2]} target={0} />,
  'find-min-rotated':         FindMinRotatedViz,
  'koko-bananas':             KokoBananasViz,

  // Linked List
  'reverse-linked-list':      LinkedListReversalViz,
  'merge-two-sorted-lists':   MergeTwoListsViz,
  'reorder-list':             ReorderListViz,
  'remove-nth-from-end':      RemoveNthViz,
  'linked-list-cycle':        LinkedListCycleViz,

  // Trees
  'invert-binary-tree':       InvertTreeViz,
  'max-depth-tree':           MaxDepthViz,
  'same-tree':                SameTreeViz,
  'level-order-traversal':    LevelOrderViz,
  'validate-bst':             BSTViz,
  'kth-smallest-bst':         KthSmallestViz,
  'lca-bst':                  LCABSTViz,
  'binary-tree-max-path':     BinaryTreeMaxPathViz,

  // Heap
  'find-median-data-stream':  FindMedianViz,
  'merge-k-sorted-lists':     MergeKListsViz,

  // Backtracking
  'combination-sum':          CombinationSumViz,
  'word-search':              WordSearchViz,

  // Graphs
  'number-of-islands':        NumberOfIslandsViz,
  'clone-graph':              CloneGraphViz,
  'course-schedule':          CourseScheduleViz,
  'pacific-atlantic':         PacificAtlanticViz,

  // Dynamic Programming
  'climbing-stairs':          ClimbingStairsViz,
  'house-robber':             HouseRobberViz,
  'coin-change':              CoinChangeViz,
  'longest-increasing-subsequence': LISViz,
  'word-break':               WordBreakViz,

  // Intervals
  'merge-intervals':          MergeIntervalsViz,
  'insert-interval':          InsertIntervalViz,
  'non-overlapping-intervals': NonOverlappingViz,

  // Bit Manipulation
  'number-of-1-bits':         NumberOf1BitsViz,
  'counting-bits':            CountingBitsViz,
  'reverse-bits':             ReverseBitsViz,
  'missing-number':           MissingNumberViz,
  'sum-of-two-integers':      SumTwoIntegersViz,
}

// ── Default export ────────────────────────────────────────────────────────────

export default function ProblemVisual({ problemId }) {
  const Viz = vizMap[problemId]
  if (!Viz) return null

  return (
    <div className="visual-box">
      <div className="section-label" style={{ marginBottom: 12 }}>Visual Demo</div>
      <Viz />
    </div>
  )
}
