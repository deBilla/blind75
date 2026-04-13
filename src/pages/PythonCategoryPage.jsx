import { Link, useParams } from 'react-router-dom'
import { pythonCategories, pythonTopics, pythonCategoryTopics } from '../data/python'

const LEVEL_COLOR = {
  Beginner:     '#10b981',
  Intermediate: '#f59e0b',
  Advanced:     '#ef4444',
}

export default function PythonCategoryPage() {
  const { id } = useParams()
  const cat = pythonCategories.find(c => c.id === id)
  const topicIds = pythonCategoryTopics[id] || []

  if (!cat) return <div style={{ padding: '2rem', color: '#64748b' }}>Category not found</div>

  return (
    <main className="category-page">
      <div className="cat-header" style={{ borderColor: cat.color + '44', background: cat.bg }}>
        <div style={{ color: cat.color, fontSize: '1.5rem', fontFamily: 'JetBrains Mono', fontWeight: 700, marginBottom: 8 }}>
          {cat.icon}
        </div>
        <h1 style={{ color: '#fff' }}>{cat.name}</h1>
        <div className="cat-concept">{cat.concept}</div>
        <div style={{ display: 'flex', gap: 8 }}>
          <span style={{ background: cat.color + '22', border: `1px solid ${cat.color}44`, color: cat.color, fontSize: '0.75rem', padding: '3px 10px', borderRadius: 20 }}>
            {cat.tagline}
          </span>
          <span style={{ background: 'rgba(255,255,255,0.05)', border: '1px solid #2a2a3a', color: '#64748b', fontSize: '0.75rem', padding: '3px 10px', borderRadius: 20 }}>
            Level {cat.level}
          </span>
        </div>
      </div>

      <div className="section-label">Lessons</div>
      <div className="problems-grid">
        {topicIds.map(tid => {
          const t = pythonTopics[tid]
          if (!t) return null
          const lvlColor = LEVEL_COLOR[t.level] || '#64748b'
          return (
            <Link key={tid} to={`/python-topic/${tid}`} className="problem-card" style={{ '--card-color': cat.color }}>
              <div className="problem-info">
                <div className="problem-title">{t.title}</div>
                <div style={{ fontSize: '0.75rem', color: '#64748b', marginTop: 4 }}>
                  {t.sections?.length || 0} sections
                </div>
              </div>
              <span className="badge" style={{ background: lvlColor + '22', color: lvlColor, border: `1px solid ${lvlColor}44`, fontSize: '0.72rem', padding: '3px 10px', borderRadius: 20, whiteSpace: 'nowrap', fontWeight: 500 }}>
                {t.level}
              </span>
            </Link>
          )
        })}
      </div>
    </main>
  )
}
