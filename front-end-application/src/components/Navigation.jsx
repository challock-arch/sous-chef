import { Link } from "react-router";

const Navigation = () => {
    return (
        <header>
            <nav class="flex w-auto p-2 bg-lime-950 text-white rounded-md m-1">
                <div class="flex-none">
                    <Link to="/">Logo Placeholder</Link>
                </div>
                <div class="flex flex-auto justify-end">
                    <Link to="/" class="px-2">Home</Link>
                    <Link to="about" class="px-2">About</Link>
                    <Link to="login" class="px-2">Login</Link>
                </div>
            </nav>
        </header>
    )
}

export default Navigation;