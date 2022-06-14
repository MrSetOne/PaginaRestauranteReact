import {Link} from 'react-router-dom'

import './NavBar.css'

function NavBar() {
  return (
    <nav className="NavBar">
        <Link to="/">Home</Link>
        <h2>Carta</h2>
        <Link to="/booking">Reservas</Link>
        <h2>Sobre nosotros</h2>
    </nav>
  )
}

export default NavBar