import { Link } from "react-router"

const ErrorPage = () => {
    return (
        <>
        <h1>Oops! Nothings Here!</h1>
        <Link to="/">
        <button>Take Me Home</button>
        </Link>
        </>
    )
}

export default ErrorPage;