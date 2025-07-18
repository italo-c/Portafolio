import { Link } from 'react-router-dom'
import './Login.css'

function Login() {
  return (
    <div className="login-container">
      <div className="login-card">
        <div className="login-topbar">
          <Link to="/" className="btn-link btn-back">
            ⬅ Regresar al Inicio
          </Link>
        </div>

        <h1>Login 🔐</h1>
        <p className="subtext">Ingrese sus credenciales para obtener beneficios en la web.</p>

        <form className="login-form">
          <label htmlFor="username">Usuario:</label>
          <input type="text" id="username" name="username" required />

          <label htmlFor="password">Contraseña:</label>
          <input type="password" id="password" name="password" required />

          <button type="submit" className="btn-submit">Iniciar Sesión</button>
        </form>
        <br />
        <Link to="/login/info" >
          Más información sobre el Login
        </Link>
      </div>
    </div>
  )
}

export default Login
