import Hero from "./Hero/Hero"
import './Header.css'
import NavBar from "./NavBar/NavBar"

function Header() {
  return (
    <header>
        <Hero/>
        <NavBar/>
    </header>
  )
}

export default Header