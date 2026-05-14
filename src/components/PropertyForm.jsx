import { useState, useEffect } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { propertiesApi } from '../services/propertiesApi'

function PropertyForm() {
  const navigate = useNavigate()
  const { id } = useParams()
  const isEditing = Boolean(id)

  const [formData, setFormData] = useState({
    title: '', location: '', price: '', type: 'Sale',
    status: 'Available', beds: '', baths: '', area: '',
    image: '', agent: '', description: ''
  })
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(null)

  useEffect(() => {
    if (isEditing) {
      propertiesApi.getOne(id)
        .then(data => setFormData(data))
        .catch(() => setError('Failed to load property'))
    }
  }, [id, isEditing])

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setLoading(true)
    try {
      if (isEditing) {
        await propertiesApi.update(id, formData)
      } else {
        await propertiesApi.create(formData)
      }
      navigate('/')
    } catch {
      setError('Failed to save property')
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="page">
      {/* Left Hero Panel */}
      <div className="form-hero">
        <img src="https://images.unsplash.com/photo-1582407947304-fd86f028f716?w=800" alt="Property" />
        <div className="form-hero-text">
          <span>{isEditing ? 'Update' : 'Create'}</span>
          <h2>List a prime residence</h2>
        </div>
      </div>

      {/* Right Form Card */}
      <div className="form-card">
        <form onSubmit={handleSubmit}>
          <div className="form-grid">
            {error && <p className="error">{error}</p>}

            <div className="form-group">
              <label>Title</label>
              <input name="title" value={formData.title} onChange={handleChange} required />
            </div>
            <div className="form-group">
              <label>Location</label>
              <input name="location" value={formData.location} onChange={handleChange} required />
            </div>
            <div className="form-group">
              <label>Type</label>
              <select name="type" value={formData.type} onChange={handleChange}>
                <option>Sale</option>
                <option>Rent</option>
              </select>
            </div>
            <div className="form-group">
              <label>Status</label>
              <select name="status" value={formData.status} onChange={handleChange}>
                <option>Available</option>
                <option>Sold</option>
                <option>Rented</option>
              </select>
            </div>
            <div className="form-group">
              <label>Price (KSh)</label>
              <input name="price" type="number" value={formData.price} onChange={handleChange} required />
            </div>
            <div className="form-group">
              <label>Beds</label>
              <input name="beds" type="number" value={formData.beds} onChange={handleChange} />
            </div>
            <div className="form-group">
              <label>Baths</label>
              <input name="baths" type="number" value={formData.baths} onChange={handleChange} />
            </div>
            <div className="form-group">
              <label>Area (m²)</label>
              <input name="area" type="number" value={formData.area} onChange={handleChange} />
            </div>
            <div className="form-group">
              <label>Image URL</label>
              <input name="image" value={formData.image} onChange={handleChange} placeholder="https://..." />
            </div>
            <div className="form-group">
              <label>Agent</label>
              <input name="agent" value={formData.agent} onChange={handleChange} />
            </div>
            <div className="form-group full-width">
              <label>Description</label>
              <textarea name="description" value={formData.description} onChange={handleChange} />
            </div>
          </div>

          <div className="form-actions">
            <button type="button" className="btn-cancel" onClick={() => navigate(-1)}>Cancel</button>
            <button type="submit" className="btn-submit" disabled={loading}>
              {loading ? 'Saving...' : isEditing ? 'Update Residence' : 'Create Residence'}
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}

export default PropertyForm