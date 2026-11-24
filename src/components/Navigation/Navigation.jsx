import { NavLink } from 'react-router'
import './Navigation.css'

function Navigation() {
  return (
    <nav className="navigation" aria-label="Navegación principal">
      <NavLink className="navigation__link" to="/" end>
        Inicio
      </NavLink>
      <NavLink className="navigation__link" to="/catalogo">
        Catálogo
      </NavLink>
    </nav>
  )
}

export default Navigation