import { Link } from 'react-router-dom'
import { goCategories, goCategoryTopics } from '../data/go'

export default function GoHome() {
  const totalTopics = Object.values(goCategoryTopics).flat().length

  return (
    <main className="home">
      <div className="hero">
        <h1 style={{
          background: 'linear-gradient(135deg, #fff 0%, #00add8 50%, #5dc9e2 100%)',
          WebkitBackgroundClip: 'text',
          WebkitTextFillColor: 'transparent',
        }}>
          Go Mastery
        </h1>
        <p>From zero values to expert patterns. Every concept with real code, gotchas, and practice hints.</p>
        <div className="stats">
          <div className="stat"><div className="num">{goCategories.length}</div><div className="label">Topics</div></div>
          <div className="stat"><div className="num">{totalTopics}</div><div className="label">Lessons</div></div>
          <div className="stat"><div className="num">10/10</div><div className="label">Target Level</div></div>
        </div>
      </div>

      <div className="py-level-legend">
        <span className="py-legend-label">Skill progression</span>
        <div className="py-level-bar">
          <div className="py-level-fill" style={{ width: '100%', background: 'linear-gradient(90deg, #00add8, #5dc9e2)' }} />
        </div>
        <span className="py-legend-end" style={{ color: '#00add8' }}>10 / 10</span>
      </div>

      <div className="category-grid">
        {goCategories.map(cat => {
          const topicIds = goCategoryTopics[cat.id] || []
          return (
            <Link
              key={cat.id}
              to={`/go/${cat.id}`}
              className="category-card py-category-card"
              style={{ '--card-color': cat.color }}
            >
              <div className="card-header">
                <div className="card-icon" style={{ fontFamily: 'JetBrains Mono', color: cat.color, fontSize: '0.9rem' }}>{cat.icon}</div>
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
