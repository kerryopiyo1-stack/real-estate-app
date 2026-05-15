const navItems = [
  { path: '/', label: 'Overview', route: 'dashboard' },
  { path: '/properties', label: 'Residences', route: 'properties' },
  { path: '/sell', label: 'New Listing', route: 'sell' },
]

function Navbar({ activeRoute, navigate }) {
  /**
   * Handles navigation click events
   * Prevents default link behavior and uses custom navigate function
   */
  function handleClick(event, path) {
    event.preventDefault()
    navigate(path)
  }

  return (
    <header className="navbar">
      {/* Brand section with company logo and name */}
      <a className="brand" href="/" onClick={(event) => handleClick(event, '/')}>
        <span className="brand-mark">NP</span>
        <span>
          <strong>Nairobi Prime Homes</strong>
          <small>Curated city residences</small>
        </span>
      </a>

      {/* Navigation links */}
      <nav aria-label="Primary navigation">
        {navItems.map((item) => (
          <a
            className={activeRoute === item.route ? 'active' : ''}
            href={item.path}
            key={item.path}
            onClick={(event) => handleClick(event, item.path)}
          >
            {item.label}
          </a>
        ))}
      </nav>
    </header>
  )
}

export default Navbar
