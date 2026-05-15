import { useState, useEffect } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { propertiesApi } from '../services/propertiesApi'

function PropertyDetail() {
  const { id } = useParams()
  const navigate = useNavigate()
  const [property, setProperty] = useState(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    propertiesApi.getOne(id)
      .then(data => { setProperty(data); setLoading(false) })
      .catch(() => { setError('Property not found'); setLoading(false) })
  }, [id])

  const handleDelete = async () => {
    if (!confirm('Delete this property?')) return
    await propertiesApi.delete(id)
    navigate('/')
  }

  if (loading) return <div className="detail-loading">Loading...</div>
  if (error) return <div className="detail-error">{error}</div>

  return (
    <div className="detail-page">
      <button className="btn-back" onClick={() => navigate(-1)}>← Back</button>

      <div className="detail-card">
        <div className="detail-image-wrap">
          <img src={property.image || 'https://images.unsplash.com/photo-1570129477492-45c003edd2be?w=800'} alt={property.title} />
          <span className={`detail-badge ${property.status === 'Available' ? 'badge-green' : 'badge-gray'}`}>
            {property.status}
          </span>
        </div>

        <div className="detail-body">
          <div className="detail-header">
            <div>
              <p className="detail-type">{property.type}</p>
              <h1 className="detail-title">{property.title}</h1>
              <p className="detail-location">📍 {property.location}</p>
            </div>
            <div className="detail-price">
              KSh {Number(property.price).toLocaleString()}
            </div>
          </div>

          <div className="detail-stats">
            <div className="stat"><span>{property.beds}</span><p>Beds</p></div>
            <div className="stat"><span>{property.baths}</span><p>Baths</p></div>
            <div className="stat"><span>{property.area}</span><p>m²</p></div>
          </div>

          <div className="detail-section">
            <h3>Description</h3>
            <p>{property.description || 'No description provided.'}</p>
          </div>

          <div className="detail-section">
            <h3>Agent</h3>
            <p>{property.agent || 'Unassigned'}</p>
          </div>

          <div className="detail-actions">
            <button className="btn-delete" onClick={handleDelete}>Delete Property</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default PropertyDetail