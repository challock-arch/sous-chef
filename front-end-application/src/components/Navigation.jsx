import { Link } from "react-router";

const Navigation = () => {
    return (
        <header>
            <nav>
                <div>
                    <Link to="/">Logo Placeholder</Link>
                </div>
                <div>
                    <Link to="/">Home</Link>
                    <Link to="About">About</Link>
                    <Link to="Login">Login</Link>
                </div>
            </nav>
        </header>
    )
}

export default Navigation;