// Dashboard component - Main landing page showing portfolio overview
// Displays featured properties, portfolio statistics, and quick action buttons

import PropertyCard from './PropertyCard.jsx'
import { formatCurrency } from '../utils.js'

/**
 * Dashboard Component
 * Shows portfolio overview with statistics and featured properties
 * @param {boolean} loading - Whether properties are still loading
 * @param {Array} properties - Array of all property objects
 * @param {function} navigate - Navigation function to change routes
 * @param {function} onEdit - Callback to handle property edit action
 * @param {function} onDelete - Callback to handle property delete action
 */
function Dashboard({ loading, properties, navigate, onEdit, onDelete }) {
  // Calculate portfolio statistics
  const totalValue = properties.reduce((sum, property) => sum + property.price, 0)
  const availableCount = properties.filter((property) => property.status === 'Available').length
  // Get first 3 properties to display as featured
  const featuredProperties = properties.slice(0, 3)
  
  // Stats array for display [label, value]
  const stats = [
    ['Total Listings', properties.length],
    ['Available', availableCount],
    ['Portfolio Value', formatCurrency(totalValue)],
  ]

  return (
    <>
      {/* Hero section with welcome message and action buttons */}
      <section className="hero-panel">
        <div className="hero-copy">
          <p className="eyebrow">Nairobi Prime Homes</p>
          <h1>Premium homes across Nairobi, managed with clarity.</h1>
          <p>
            Publish refined listings, monitor availability, and keep every residence ready for
            serious buyers in Nairobi's most sought-after neighborhoods.
          </p>
          <div className="hero-actions">
            {/* Button to add a new property */}
            <button type="button" onClick={() => navigate('/sell')}>
              Add Residence
            </button>
            {/* Button to view all properties */}
            <button className="ghost" type="button" onClick={() => navigate('/properties')}>
              Browse Portfolio
            </button>
          </div>
        </div>
        {/* Market indicators showing main neighborhoods */}
        <div className="market-strip" aria-label="Market summary">
          <span>Westlands</span>
          <span>Kilimani</span>
          <span>Runda</span>
          <span>Lavington</span>
        </div>
      </section>

      {/* Portfolio statistics section */}
      <section className="stats-grid" aria-label="Portfolio metrics">
        {stats.map(([label, value]) => (
          <article key={label}>
            <span>{label}</span>
            <strong>{value}</strong>
          </article>
        ))}
      </section>

      {/* Featured properties section header */}
      <section className="section-heading">
        <div>
          <p className="eyebrow">Featured</p>
          <h2>Prime residences</h2>
        </div>
        {/* Button to view all properties */}
        <button className="secondary-button" type="button" onClick={() => navigate('/properties')}>
          See All
        </button>
      </section>

      {/* Display loading state or featured properties */}
      {loading ? (
        <p className="empty-state">Loading listings...</p>
      ) : (
        <div className="property-grid">
          {/* Render first 3 properties as featured cards */}
          {featuredProperties.map((property) => (
            <PropertyCard key={property.id} {...{ property, navigate, onDelete, onEdit }} />
          ))}
        </div>
      )}
    </>
  )
}

export default Dashboard
