import { Outlet, Link } from "react-router";

const LoginPage = () => {

    const handleSubmit = (event) => {
        event.preventDefault();
        console.log("Form Submitted")
    }

    return (
        <>
            <main className="login-form-container">
                <form className="login-form" onSubmit={handleSubmit}>
                    <input type="text" id="username" name="username" required placeholder="username" />
                    <input type="password" id="password" name="password" required placeholder="password" />
                <div className="login-or-register">
                    <p>New User? <em><u><Link to="/register">Register</Link></u></em></p>
                    <button type="submit">Login</button>
                </div>
                </form>
            </main>
        </>
    )
};

export default LoginPage;