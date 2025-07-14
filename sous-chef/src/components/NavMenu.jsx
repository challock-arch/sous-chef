import { Link } from "react-router";

const NavMenu = () => {
    return (
        <header>
            <nav className="topnav">
                <div>
                    <p className="logo">Logo</p>
                </div>
                <ul>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/About">About</Link></li>
                    <li><Link to="/Login-Register">Login / Register</Link></li>
                </ul>
            </nav>
        </header>
    )
};

export default NavMenu;