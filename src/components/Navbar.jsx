import { Link } from "react-router-dom";
import './css/Navbar.css'
function Navbar() {
    return (
        <div className="Navbar">
            <div className="nav-home">
                <Link to="/">Home</Link>
            </div>
            <div className="nav-fav">
                <Link to="/favorites">Favorites</Link>
            </div>
        </div>
    )
}

export default Navbar;