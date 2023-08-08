import { NavLink } from "react-router-dom";
import "./NavBar.css";
function NavBar() {
    return (
        <nav className="main-navbar">
            <NavLink to="/" className="nav-link">
                Recipes
            </NavLink>
            <NavLink to="/saved" className="nav-link">
                Saved Recipes
            </NavLink>
        </nav>
    );
}
export default NavBar;
