import { Outlet, Link } from "react-router";
import NavMenu from "./NavMenu";
import Footer from "./Footer";

const LoginPage = () => {
    return (
        <>
            <NavMenu />
            <main className="login-form-container">
                <form className="login-form">
                    <input type="text" id="username" name="username" required placeholder="username" />
                    <input type="password" id="password" name="password" required placeholder="password" />
                </form>
                <div className="login-or-register">
                    <p>New User? <em><u><Link to="user-info">Register</Link></u></em></p>
                    <button>Login</button>
                </div>
            </main>
            <Footer />

            <Outlet />
        </>
    )
};

export default LoginPage;