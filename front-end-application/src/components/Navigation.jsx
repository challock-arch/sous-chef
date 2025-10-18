import { useState } from "react";
import { Link } from "react-router";
import Hamburger from 'hamburger-react';

const Navigation = () => {

    const [loggedIn, isLoggedIn] = useState(false);

    const handleClick = () => {
        isLoggedIn(!loggedIn);
    }

    return (
        <header>
            <nav class="grid grid-cols-2 bg-lime-950 text-white rounded-b-md">
                <div class="px-4 self-center">
                    <Link to="/">Logo Placeholder</Link>
                </div>
                <div class="justify-self-end self-center md:hidden">
                    <Hamburger size={20} color="white" />
                </div>
                <div class="hidden md:justify-self-end md:flex md:py-3 md:items-center">
                    <Link to="/" class="px-4">Home</Link>
                    <Link to="about" class="px-4">About</Link>
                    <button class="px-4" onClick={handleClick}>{loggedIn ? "Logout" : "Login"}</button>
                </div>
            </nav>
        </header>
    )
}

export default Navigation;