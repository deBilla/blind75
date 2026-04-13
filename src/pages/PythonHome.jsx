import { Link } from 'react-router-dom'
import { pythonCategories, pythonCategoryTopics } from '../data/python'

export default function PythonHome() {
  const totalTopics = Object.values(pythonCategoryTopics).flat().length

  return (
    <main className="home">
      <div className="hero">
        <h1 style={{
          background: 'linear-gradient(135deg, #fff 0%, #3b82f6 50%, #10b981 100%)',
          WebkitBackgroundClip: 'text',
          WebkitTextFillColor: 'transparent',
        }}>
          Python Mastery
        </h1>
        <p>From basics to 8/10 engineer. Every concept explained with real code, gotchas, and practice hints.</p>
        <div className="stats">
          <div className="stat"><div className="num">{pythonCategories.length}</div><div className="label">Topics</div></div>
          <div className="stat"><div className="num">{totalTopics}</div><div className="label">Lessons</div></div>
          <div className="stat"><div className="num">8/10</div><div className="label">Target Level</div></div>
        </div>
      </div>

      <div className="py-level-legend">
        <span className="py-legend-label">Skill progression</span>
        <div className="py-level-bar">
          <div className="py-level-fill" />
        </div>
        <span className="py-legend-end">8 / 10</span>
      </div>

      <div className="category-grid">
        {pythonCategories.map(cat => {
          const topicIds = pythonCategoryTopics[cat.id] || []
          return (
            <Link
              key={cat.id}
              to={`/python/${cat.id}`}
              className="category-card py-category-card"
              style={{ '--card-color': cat.color }}
            >
              <div className="card-header">
                <div className="card-icon" style={{ fontFamily: 'JetBrains Mono', color: cat.color }}>{cat.icon}</div>
                <div className="py-level-badge" style={{ background: cat.color + '22', color: cat.color, border: `1px solid ${cat.color}44` }}>
                  Lvl {cat.level}
                </div>
              </div>
              <div className="card-name">{cat.name}</div>
              <div className="card-tagline">{cat.tagline}</div>
              <div className="card-concept">{cat.concept}</div>
              <div className="py-topic-count">{topicIds.length} lesson{topicIds.length !== 1 ? 's' : ''}</div>
            </Link>
          )
        })}
      </div>
    </main>
  )
}
