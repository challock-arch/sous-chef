import { useState } from "react";
import { Link } from "react-router";
import Hamburger from 'hamburger-react';

const Navigation = () => {

    const [loggedIn, isLoggedIn] = useState(true);
    const [opened, isOpened] = useState(false);

    const handleClick = () => {
        isLoggedIn(!loggedIn);
    }

    const toggleMenu = () => {
        isOpened(!opened);
    }

    return (
        <header>
            <nav className="grid grid-cols-2 bg-lime-950 text-stone-200 rounded-b-md">
                <div className="px-4 self-center">
                    <Link to="/">Logo Placeholder</Link>
                </div>
                {/* TODO: Add dropdown menu for sm breakpoint */}
                <div className="justify-self-end self-center md:hidden">
                    <Hamburger size={20} color="white" onToggle={toggleMenu}/>
                </div>
                {loggedIn ? 
                <div className={`${!opened ? "hidden" : "grid grid-cols-1 text-left"} md:justify-self-end md:flex md:py-3 md:items-center`}>
                    <Link to="recipes" className={`${opened ? "py-3" : ""} px-4`}>Recipes</Link>
                    <Link to="meal-plan" className={`${opened ? "py-3" : ""} px-4`}>Plan</Link>
                    <button className={`${opened ? "text-left py-3" : ""} px-4`} onClick={handleClick}>{loggedIn ? "Logout" : "Login"}</button>
                </div> 
                : 
                <div className={`${!opened ? "hidden" : "grid grid-cols-1 text-left"} md:justify-self-end md:flex md:py-3 md:items-center`}>
                    <Link to="/" className={`${opened ? "py-3" : ""} px-4`}>Home</Link>
                    <Link to="about" className={`${opened ? "py-3" : ""} px-4`}>About</Link>
                    <button className={`${opened ? "text-left py-3" : ""} px-4`} onClick={handleClick}>{loggedIn ? "Logout" : "Login"}</button>
                </div>}

            </nav>
        </header>
    )
}

export default Navigation;