import { Link } from "react-router-dom"
import './Navbar.css'

const Navbar = () => {
    return (
        <nav className="navbar">
            <ul className="nav-links">
                <li><Link to='/'>Home</Link></li>
                <li><Link to='/about'>About</Link></li>
            </ul>
        </nav>
    )
};

export default Navbar