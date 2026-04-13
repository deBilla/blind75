import { Link, useLocation } from 'react-router-dom'

export default function Navbar() {
  const loc = useLocation()
  const isHome = loc.pathname === '/'
  const isPython = loc.pathname.startsWith('/python')

  const backLink = isPython && loc.pathname !== '/python'
    ? { to: '/python', label: '← Python Topics' }
    : !isHome
    ? { to: '/', label: '← All Categories' }
    : null

  return (
    <nav>
      <div style={{ display: 'flex', alignItems: 'center', gap: '1.25rem' }}>
        <Link to="/" className="brand">
          <span>{'{ }'}</span> Blind 75 Visual
        </Link>
        <Link
          to="/python"
          style={{
            fontSize: '0.82rem',
            color: isPython ? '#10b981' : '#64748b',
            textDecoration: 'none',
            fontWeight: 500,
            padding: '4px 10px',
            borderRadius: 8,
            background: isPython ? 'rgba(16,185,129,0.1)' : 'transparent',
            border: isPython ? '1px solid rgba(16,185,129,0.25)' : '1px solid transparent',
            transition: 'color 0.2s, background 0.2s',
          }}
        >
          🐍 Python
        </Link>
      </div>
      {backLink && (
        <Link to={backLink.to} className="back-btn">
          {backLink.label}
        </Link>
      )}
    </nav>
  )
}
