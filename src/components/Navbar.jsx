import { Link, useLocation } from 'react-router-dom'

export default function Navbar() {
  const loc = useLocation()
  const isHome = loc.pathname === '/'

  return (
    <nav>
      <Link to="/" className="brand">
        <span>{'{ }'}</span> Blind 75 Visual
      </Link>
      {!isHome && (
        <Link to="/" className="back-btn">
          ← All Categories
        </Link>
      )}
    </nav>
  )
}
