import { Link } from 'react-router-dom'
import reactLogo from '../assets/react.svg'

function Header() {
  return (
    <header className="header">
      <div className="header-content">
        <Link to="/" className="logo-link">
                  <img src={reactLogo} className="logo react" alt="React logo" />
                  <h1 className="logo-title">LowTuPortafolio</h1>
        </Link>
        <nav className="nav-menu">
          <ul>
            <li>
              <Link to="/">Inicio</Link>
            </li>
            <li>
              <Link to="/login">Login</Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  )
}

export default Header