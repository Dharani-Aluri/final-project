import { NavLink } from "react-router-dom";
import "./NavBar.css";
import logo from "../assets/logo-color.svg";
function NavBar(props) {
    const favLength = props.favoriteRecipes.length;
    return (
        <nav className="side-nav">
            <div>
                <NavLink to="/" className="nav-link">
                    <img className="logo" src={logo} alt="Recipe Book Logo" />
                </NavLink>
            </div>
            <div className="navbar-container">
                <NavLink to="/" className="nav-link">
                    Home
                </NavLink>
                <NavLink to="/recipes" className="nav-link">
                    Recipes
                </NavLink>
                <NavLink to="/favorites" className="nav-link">
                    Favorites ({favLength})
                </NavLink>
            </div>
        </nav>
    );
}
export default NavBar;
