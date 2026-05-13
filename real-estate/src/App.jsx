import { BrowserRouter, Routes, Route } from 'react-router-dom'
import PropertyForm from './components/PropertyForm'
import './App.css'
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<h1>Real Estate App — Home</h1>} />
        <Route path="/properties/new" element={<PropertyForm />} />
        <Route path="/properties/edit/:id" element={<PropertyForm />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App