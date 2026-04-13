import { Link, useParams } from 'react-router-dom'
import CodeBlock from '../components/CodeBlock'

const LEVEL_COLOR = {
  Beginner:     '#10b981',
  Intermediate: '#f59e0b',
  Advanced:     '#ef4444',
  Expert:       '#c084fc',
}

export default function LangTopicPage({ topics, categories, categoryBasePath, lang }) {
  const { id } = useParams()
  const t = topics[id]

  if (!t) return <div style={{ padding: '2rem', color: '#64748b' }}>Topic not found</div>

  const cat = categories.find(c => c.id === t.category)
  const lvlColor = LEVEL_COLOR[t.level] || '#64748b'

  return (
    <main className="problem-page fade-in">
      {/* Header */}
      <div className="problem-page-header">
        <div style={{ marginBottom: 8 }}>
          {cat && (
            <Link to={`${categoryBasePath}/${cat.id}`}
              style={{ fontSize: '0.8rem', color: cat?.color || '#6366f1', textDecoration: 'none', fontWeight: 500 }}>
              ← {cat.name}
            </Link>
          )}
        </div>
        <h1>{t.title}</h1>
        <div className="problem-meta">
          <span style={{
            background: lvlColor + '22', color: lvlColor, border: `1px solid ${lvlColor}44`,
            fontSize: '0.75rem', padding: '3px 12px', borderRadius: 20, fontWeight: 500,
          }}>
            {t.level}
          </span>
          {cat && (
            <span className="complexity-pill" style={{ color: cat.color }}>{cat.name}</span>
          )}
          {lang && (
            <span className="complexity-pill">{lang}</span>
          )}
        </div>
      </div>

      {/* Overview */}
      <div className="section-label">Overview</div>
      <div className="description-box">{t.description}</div>

      {/* Key Insight */}
      <div className="section-label">Key Insight</div>
      <div className="insight-box">
        <strong>💡 </strong>{t.keyInsight}
      </div>

      {/* Sections */}
      {t.sections && t.sections.map((sec, idx) => (
        <div key={idx}>
          <div className="section-label" style={{ color: cat?.color || '#6366f1' }}>
            {sec.title}
          </div>
          {sec.explanation && (
            <div className="description-box" style={{ borderColor: (cat?.color || '#6366f1') + '33', marginBottom: '0.75rem' }}>
              {sec.explanation}
            </div>
          )}
          {sec.code && (
            <CodeBlock code={sec.code} lang={lang || 'Code'} />
          )}
        </div>
      ))}

      {/* Gotchas */}
      {t.gotchas && t.gotchas.length > 0 && (
        <>
          <div className="section-label">Common Gotchas</div>
          <div className="description-box" style={{ borderColor: '#ef444433' }}>
            <ul style={{ margin: 0, paddingLeft: '1.25rem', lineHeight: 1.9 }}>
              {t.gotchas.map((g, i) => (
                <li key={i} style={{ color: '#fca5a5' }}>{g}</li>
              ))}
            </ul>
          </div>
        </>
      )}

      {/* Practice */}
      {t.practiceHints && t.practiceHints.length > 0 && (
        <>
          <div className="section-label">Practice</div>
          <div className="description-box" style={{ borderColor: '#22c55e33' }}>
            <ol style={{ margin: 0, paddingLeft: '1.25rem', lineHeight: 1.9 }}>
              {t.practiceHints.map((hint, i) => (
                <li key={i} style={{ color: '#86efac' }}>{hint}</li>
              ))}
            </ol>
          </div>
        </>
      )}
    </main>
  )
}
