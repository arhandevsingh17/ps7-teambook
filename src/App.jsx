import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Employees from './pages/Employees'
import EmployeeDetails from './pages/EmployeeDetails'
import NotFound from './pages/NotFound'
import Navbar from './components/Navbar'
import './App.css'

function App() {
  return (
    <>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/employees" element={<Employees />} />
        <Route path="/employees/:id" element={<EmployeeDetails />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  )
}

export default App