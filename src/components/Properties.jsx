import PropertyCard from './PropertyCard.jsx'

// status options for the filter dropdown
const statuses = ['All', 'Available', 'Under Offer', 'Sold', 'Rented']

function Properties({
  error,
  loading,
  navigate,
  onEdit,
  properties,
  searchTerm,
  setSearchTerm,
  setStatusFilter,
  statusFilter,
}) {
  return (
    <>
      {/* page header with title and button to add a new listing */}
      <section className="page-header">
        <div>
          <p className="eyebrow">Portfolio</p>
          <h1>Available residences</h1>
        </div>
        <button type="button" onClick={() => navigate('/sell')}>
          New Residence
        </button>
      </section>

      {/* search and filter controls */}
      <section className="filters" aria-label="Property filters">
        <label>
          Search
          <input
            onChange={(event) => setSearchTerm(event.target.value)}
            placeholder="Search by title, neighborhood, or type"
            type="search"
            value={searchTerm}
          />
        </label>

        {/* dropdown to filter listings by status */}
        <label>
          Status
          <select onChange={(event) => setStatusFilter(event.target.value)} value={statusFilter}>
            {statuses.map((status) => (
              <option key={status}>{status}</option>
            ))}
          </select>
        </label>
      </section>

      {/* show error message if the API is not running */}
      {error && <p className="alert">{error}</p>}

      {/* show loading state while fetching properties */}
      {loading && <p className="empty-state">Loading listings...</p>}

      {/* show empty state if no properties match the search or filter */}
      {!loading && properties.length === 0 && (
        <p className="empty-state">No matching listings.</p>
      )}

      {/* render a card for each property that matches the search and filter */}
      <div className="property-grid">
        {properties.map((property) => (
          <PropertyCard key={property.id} {...{ property, navigate, onEdit }} />
        ))}
      </div>
    </>
  )
}

export default Properties