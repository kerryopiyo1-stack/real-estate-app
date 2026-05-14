import { useState, useEffect } from 'react'
import { BrowserRouter, Routes, Route, useNavigate, useLocation } from 'react-router-dom'
import Navbar from './components/Navbar'
import { propertiesApi } from './services/propertiesApi'
import Dashboard from './components/Dashboard'
import Properties from './components/Properties'
import PropertyDetail from './components/PropertyDetail'
import PropertyForm from './components/PropertyForm'
import './App.css'

function AppContent() {
  const navigate = useNavigate()
  const location = useLocation()
 
  const [properties, setProperties] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)
  const [searchTerm, setSearchTerm] = useState('')
  const [statusFilter, setStatusFilter] = useState('All')
 
  const activeRoute =
    location.pathname === '/' ? 'dashboard'
    : location.pathname.startsWith('/properties') ? 'properties'
    : location.pathname.startsWith('/sell') || location.pathname.startsWith('/edit') ? 'sell'
    : ''
 
  useEffect(() => {
    propertiesApi.getAll()
      .then((data) => { setProperties(data); setLoading(false) })
      .catch(() => { setError('Could not connect to the API. Is json-server running?'); setLoading(false) })
  }, [])
 
  const handleEdit = (property) => {
    navigate(`/properties/edit/${property.id}`)
  }
 
  const handleDelete = async (id) => {
    if (!confirm('Delete this property?')) return
    await propertiesApi.delete(id)
    setProperties((prev) => prev.filter((p) => p.id !== id))
  }
 
  const filteredProperties = properties.filter((p) => {
    const matchesSearch =
      p.title?.toLowerCase().includes(searchTerm.toLowerCase()) ||
      p.location?.toLowerCase().includes(searchTerm.toLowerCase()) ||
      p.type?.toLowerCase().includes(searchTerm.toLowerCase())
    const matchesStatus = statusFilter === 'All' || p.status === statusFilter
    return matchesSearch && matchesStatus
  })
 
  const sharedProps = { navigate, onEdit: handleEdit, onDelete: handleDelete }
 
  return (
    <>
      <Navbar activeRoute={activeRoute} navigate={navigate} />
      <main>
        <Routes>
          <Route
            path="/"
            element={
              <Dashboard
                loading={loading}
                properties={properties}
                {...sharedProps}
              />
            }
          />
          <Route
            path="/properties"
            element={
              <Properties
                error={error}
                loading={loading}
                properties={filteredProperties}
                searchTerm={searchTerm}
                setSearchTerm={setSearchTerm}
                setStatusFilter={setStatusFilter}
                statusFilter={statusFilter}
                {...sharedProps}
              />
            }
          />
          <Route path="/properties/:id" element={<PropertyDetail />} />
          <Route path="/properties/new" element={<PropertyForm />} />
          <Route path="/properties/edit/:id" element={<PropertyForm />} />
          <Route path="/sell" element={<PropertyForm />} />
        </Routes>
      </main>
    </>
  )
}

function App() {
  return (
    <BrowserRouter>
      <AppContent/>
    </BrowserRouter>
  )
}

export default App
