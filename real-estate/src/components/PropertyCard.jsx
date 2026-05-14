import { formatCurrency, propertySpecs } from '../utils.js'

function PropertyCard({ navigate, onEdit, property }) {
  return (
    // each property is wrapped in an article for semantic HTML
    <article className="property-card">

      {/* clicking the image navigates to the property detail page */}
      <button
        className="image-button"
        type="button"
        onClick={() => navigate(`/properties/${property.id}`)}
      >
        <img alt={property.title} src={property.image} />
        <span>{property.status}</span>
      </button>

      <div className="property-card-body">
        <div>
          <p className="property-type">{property.type}</p>
          <h3>{property.title}</h3>
          <p>{property.location}</p>
        </div>

        {/* display price formatted as KES currency */}
        <strong>{formatCurrency(property.price)}</strong>

        {/* loop through propertySpecs to render beds, baths and area */}
        <dl>
          {propertySpecs.map(([key, label, suffix = '']) => (
            <div key={key}>
              <dt>{label}</dt>
              <dd>
                {property[key]}
                {suffix}
              </dd>
            </div>
          ))}
        </dl>

        {/* action buttons — details navigates to full listing, edit opens the form */}
        <div className="card-actions">
          <button type="button" onClick={() => navigate(`/properties/${property.id}`)}>
            Details
          </button>
          <button className="secondary-button" type="button" onClick={() => onEdit(property)}>
            Edit
          </button>
        </div>
      </div>
    </article>
  )
}

export default PropertyCard