import { Link } from "react-router";
import '../Styles/topNav.css'

const NavMenu = () => {
    return (
        <header>
            <nav className="topnav">
                <div>
                    <p className="logo">Logo</p>
                </div >
                <ul>
                    <Link to="/"><li>Home</li></Link>
                    <Link to="/register"><li>Get Started</li></Link>
                </ul>
            </nav>
        </header>
    )
};

export default NavMenu;