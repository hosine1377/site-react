import { Routes, Route, Link } from 'react-router-dom'
import Home from './pages/Home'
import Product from './pages/Prodcuts'
import Welecome from './pages/Welcome'
import Login from './pages/Login'
import Regester from './pages/Regester'
import './App.css'
function App() {
  return (
    <div className="container">
      <header>
        <nav style={{ display: 'flex', gap: '10px' }}>
          <Link style={{ textDecoration: 'none' }} to="/">
            Home
          </Link>
          <Link style={{ textDecoration: 'none' }} to="/product">
            Products
          </Link>
          <Link style={{ textDecoration: 'none' }} to="/welecome">
            Welcome
          </Link>
        </nav>
      </header>
      <main>
        <Routes>
          <Route index element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/regester" element={<Regester />} />
          <Route path="/product" element={<Product />} />
          <Route path="/product/:id" element={<Product />} />
          <Route path="/welecome" element={<Welecome />} />
        </Routes>
      </main>

      {/* <footer>footer</footer> */}
    </div>
  )
}

export default App
