import { BrowserRouter, Routes, Route } from 'react-router-dom'
import PropertyDetail from './components/PropertyDetail'
import './App.css'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<h1>Real Estate App — Home</h1>} />
        <Route path="/properties/:id" element={<PropertyDetail />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App