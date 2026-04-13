import { Link } from 'react-router-dom'
import { categories } from '../data/blind75'
import { pythonCategories } from '../data/python'

export default function Home() {
  const total = categories.reduce((s, c) => s + c.count, 0)

  return (
    <main className="home">
      <div className="hero">
        <h1>Blind 75 Visualized</h1>
        <p>Every algorithm pattern explained visually. Step-by-step solutions with interactive traces.</p>
        <div className="stats">
          <div className="stat"><div className="num">{total}</div><div className="label">Problems</div></div>
          <div className="stat"><div className="num">{categories.length}</div><div className="label">Categories</div></div>
          <div className="stat"><div className="num">∞</div><div className="label">Visual Demos</div></div>
        </div>
      </div>

      <div className="category-grid">
        {categories.map(cat => (
          <Link
            key={cat.id}
            to={`/category/${cat.id}`}
            className="category-card"
            style={{ '--card-color': cat.color }}
          >
            <div className="card-header">
              <div className="card-icon">{cat.icon}</div>
              <div className="card-count">{cat.count} problems</div>
            </div>
            <div className="card-name">{cat.name}</div>
            <div className="card-tagline">{cat.tagline}</div>
            <div className="card-concept">{cat.concept}</div>
          </Link>
        ))}
      </div>

      {/* Python Learning Section */}
      <div className="home-section-divider">
        <div className="home-section-line" />
        <span className="home-section-title">Python Learning</span>
        <div className="home-section-line" />
      </div>

      <div className="py-home-banner">
        <div className="py-banner-left">
          <div className="py-banner-icon">🐍</div>
          <div>
            <div className="py-banner-title">Python — Basics to 8/10 Engineer</div>
            <div className="py-banner-sub">
              {pythonCategories.length} topic areas · Variables → Concurrency · Interactive code runner
            </div>
          </div>
        </div>
        <Link to="/python" className="py-banner-btn">Start Learning →</Link>
      </div>

      <div className="category-grid" style={{ marginTop: '1rem' }}>
        {pythonCategories.map(cat => (
          <Link
            key={cat.id}
            to={`/python/${cat.id}`}
            className="category-card py-category-card"
            style={{ '--card-color': cat.color }}
          >
            <div className="card-header">
              <div className="card-icon" style={{ fontFamily: 'JetBrains Mono', color: cat.color, fontSize: '0.95rem' }}>{cat.icon}</div>
              <div className="py-level-badge" style={{ background: cat.color + '22', color: cat.color, border: `1px solid ${cat.color}44` }}>
                Lvl {cat.level}
              </div>
            </div>
            <div className="card-name">{cat.name}</div>
            <div className="card-tagline">{cat.tagline}</div>
            <div className="card-concept">{cat.concept}</div>
          </Link>
        ))}
      </div>
    </main>
  )
}
