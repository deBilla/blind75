import { Link, useParams } from 'react-router-dom'
import { categories, problems, categoryProblems } from '../data/blind75'
import CategoryVisual from '../components/CategoryVisual'

export default function CategoryPage() {
  const { id } = useParams()
  const cat = categories.find(c => c.id === id)
  const problemIds = categoryProblems[id] || []

  if (!cat) return <div style={{ padding: '2rem', color: '#64748b' }}>Category not found</div>

  return (
    <main className="category-page">
      <div className="cat-header" style={{ borderColor: cat.color + '44', background: cat.bg }}>
        <div style={{ color: cat.color, fontSize: '2rem', fontFamily: 'JetBrains Mono', fontWeight: 700, marginBottom: 8 }}>
          {cat.icon}
        </div>
        <h1 style={{ color: '#fff' }}>{cat.name}</h1>
        <div className="cat-concept">{cat.concept}</div>
        <div style={{ display: 'flex', gap: 8 }}>
          <span style={{ background: cat.color + '22', border: `1px solid ${cat.color}44`, color: cat.color, fontSize: '0.75rem', padding: '3px 10px', borderRadius: 20 }}>
            {cat.tagline}
          </span>
          <span style={{ background: 'rgba(255,255,255,0.05)', border: '1px solid #2a2a3a', color: '#64748b', fontSize: '0.75rem', padding: '3px 10px', borderRadius: 20 }}>
            {problemIds.length} problems
          </span>
        </div>
      </div>

      {/* Animated visual of the pattern */}
      <CategoryVisual categoryId={id} />

      {/* Problem list */}
      <div className="section-label">Problems</div>
      <div className="problems-grid">
        {problemIds.map(pid => {
          const p = problems[pid]
          if (!p) return null
          return (
            <Link key={pid} to={`/problem/${pid}`} className="problem-card" style={{ '--card-color': cat.color }}>
              <div className="problem-info">
                <div className="problem-num">#{p.number}</div>
                <div className="problem-title">{p.title}</div>
                <div style={{ fontSize: '0.75rem', color: '#64748b', marginTop: 4 }}>
                  {p.time} · {p.space}
                </div>
              </div>
              <span className={`badge ${p.difficulty}`}>{p.difficulty}</span>
            </Link>
          )
        })}
      </div>
    </main>
  )
}
