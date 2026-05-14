// Navigation bar component for the application
// Displays the brand name and navigation links to different pages

// Navigation items configuration
// Each item has a path, label for display, and route identifier
const navItems = [
  { path: '/', label: 'Overview', route: 'dashboard' },
  { path: '/properties', label: 'Residences', route: 'properties' },
  { path: '/sell', label: 'New Listing', route: 'sell' },
]

/**
 * Navbar Component
 * Displays the application header with brand and navigation links
 * @param {string} activeRoute - The currently active route name for highlighting
 * @param {function} navigate - Callback function to navigate to a different route
 */
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
