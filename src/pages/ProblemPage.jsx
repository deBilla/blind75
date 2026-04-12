import { Link, useParams } from 'react-router-dom'
import { problems, categories } from '../data/blind75'
import CodeBlock from '../components/CodeBlock'
import { TraceVisual } from '../components/ProblemVisual'
import ProblemVisual from '../components/ProblemVisual'

export default function ProblemPage() {
  const { id } = useParams()
  const p = problems[id]

  if (!p) return <div style={{ padding: '2rem', color: '#64748b' }}>Problem not found</div>

  const cat = categories.find(c => c.id === p.category)

  return (
    <main className="problem-page fade-in">
      {/* Header */}
      <div className="problem-page-header">
        <div style={{ marginBottom: 8 }}>
          {cat && (
            <Link to={`/category/${cat.id}`}
              style={{ fontSize: '0.8rem', color: cat.color, textDecoration: 'none', fontWeight: 500 }}>
              ← {cat.name}
            </Link>
          )}
        </div>
        <h1>{p.title}</h1>
        <div className="problem-meta">
          <span className={`badge ${p.difficulty}`}>{p.difficulty}</span>
          <a href={`https://leetcode.com/problems/${id}/`} target="_blank" rel="noreferrer" className="lc-link">
            LeetCode #{p.number} ↗
          </a>
          <span className="complexity-pill">Time: {p.time}</span>
          <span className="complexity-pill">Space: {p.space}</span>
        </div>
      </div>

      {/* Problem description */}
      <div className="section-label">Problem</div>
      <div className="description-box">{p.description}</div>

      {/* Key insight */}
      <div className="section-label">Key Insight</div>
      <div className="insight-box">
        <strong>💡 </strong>{p.keyInsight}
      </div>

      {/* Approach */}
      <div className="section-label">Approach</div>
      <div className="description-box" style={{ borderColor: cat ? cat.color + '33' : undefined }}>
        {p.approach}
      </div>

      {/* Clarify First */}
      {p.clarifyingQuestions && (
        <>
          <div className="section-label">Clarify First</div>
          <div className="description-box" style={{ borderColor: '#f59e0b33' }}>
            <ul style={{ margin: 0, paddingLeft: '1.25rem', lineHeight: 1.8 }}>
              {p.clarifyingQuestions.map((q, i) => (
                <li key={i} style={{ color: '#cbd5e1' }}>{q}</li>
              ))}
            </ul>
          </div>
        </>
      )}

      {/* How to Explain Your Approach */}
      {p.approachWalkthrough && (
        <>
          <div className="section-label">How to Explain Your Approach</div>
          <div className="insight-box" style={{ borderLeft: '3px solid #6366f1', background: 'rgba(99,102,241,0.07)' }}>
            {p.approachWalkthrough}
          </div>
        </>
      )}

      {/* Code Quality */}
      {p.codeQuality && (
        <>
          <div className="section-label">Code Quality</div>
          <div className="description-box" style={{ borderColor: '#22c55e33' }}>
            <ul style={{ margin: 0, paddingLeft: '1.25rem', lineHeight: 1.8 }}>
              {p.codeQuality.map((tip, i) => (
                <li key={i} style={{ color: '#cbd5e1' }}>{tip}</li>
              ))}
            </ul>
          </div>
        </>
      )}

      {/* If You Get Stuck */}
      {p.gettingUnstuck && (
        <>
          <div className="section-label">If You Get Stuck</div>
          <div className="description-box" style={{ borderColor: '#ec489933' }}>
            <ol style={{ margin: 0, paddingLeft: '1.25rem', lineHeight: 1.8 }}>
              {p.gettingUnstuck.map((step, i) => (
                <li key={i} style={{ color: '#cbd5e1' }}>{step}</li>
              ))}
            </ol>
          </div>
        </>
      )}

      {/* Animated visual (if available for this problem) */}
      <ProblemVisual problemId={id} />

      {/* Step-by-step trace */}
      {p.example && (
        <>
          <div className="section-label">
            Example: <span style={{ color: '#64748b', textTransform: 'none', letterSpacing: 0, fontWeight: 400, fontSize: '0.82rem' }}>
              Input {p.example.input} → Output {p.example.output}
            </span>
          </div>
          <TraceVisual trace={p.example.trace} />
        </>
      )}

      {/* Solution */}
      <div className="section-label">Solution</div>
      <CodeBlock code={p.solution} lang="Python" testCode={p.testCode} />

      {/* Complexity Breakdown */}
      {p.complexityBreakdown && (
        <>
          <div className="section-label">Complexity Breakdown</div>
          <div className="description-box" style={{ borderColor: '#a78bfa33' }}>
            {p.complexityBreakdown}
          </div>
        </>
      )}

      {/* Complexity summary */}
      <div style={{
        display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '0.75rem', marginBottom: '1.5rem'
      }}>
        <div style={{ background: 'rgba(99,102,241,0.08)', border: '1px solid rgba(99,102,241,0.2)', borderRadius: 10, padding: '1rem', textAlign: 'center' }}>
          <div style={{ fontSize: '0.7rem', color: '#64748b', textTransform: 'uppercase', letterSpacing: 1, marginBottom: 4 }}>Time</div>
          <div style={{ fontFamily: 'JetBrains Mono', fontSize: '1.1rem', fontWeight: 700, color: '#a78bfa' }}>{p.time}</div>
        </div>
        <div style={{ background: 'rgba(16,185,129,0.08)', border: '1px solid rgba(16,185,129,0.2)', borderRadius: 10, padding: '1rem', textAlign: 'center' }}>
          <div style={{ fontSize: '0.7rem', color: '#64748b', textTransform: 'uppercase', letterSpacing: 1, marginBottom: 4 }}>Space</div>
          <div style={{ fontFamily: 'JetBrains Mono', fontSize: '1.1rem', fontWeight: 700, color: '#34d399' }}>{p.space}</div>
        </div>
      </div>
    </main>
  )
}
