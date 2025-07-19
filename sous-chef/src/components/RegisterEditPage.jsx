import Footer from "./Footer";
import NavMenu from "./NavMenu";

const RegisterAndEdit = () => {
    return (
        <>
            <NavMenu />
            <main className="register-container">
                <h1>Image</h1>
                <form className="login-form">
                    <input type="text" id="name" name="name" required placeholder="name" />
                    <input type="email" id="email" name="email" required placeholder="email" />
                    <input type="text" id="username" name="username" required placeholder="username" />
                    <input type="password" id="password" name="password" required placeholder="password" />
                    <input type="password" id="confirm-password" name="confirm-password" required placeholder="confirm password" />
                    <button>Save and Continue</button>
                </form>
            </main>
            <Footer />
        </>
    )
}

export default RegisterAndEdit;