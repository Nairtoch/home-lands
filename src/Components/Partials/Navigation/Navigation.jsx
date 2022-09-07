import { NavLink } from "react-router-dom"
import { Search } from "../../Pages/Search/Search"

export const Navigation = () => {
    return(
        <nav className="NavBar">
            <ul>
                <li><NavLink to="/">Forside</NavLink></li>
                <li><NavLink to="/products">Boliger til salg</NavLink></li>
                <li><NavLink to="/login">Login</NavLink></li>
                <li><NavLink to="/search"><Search /></NavLink></li>
            </ul>
        </nav>
    )
}