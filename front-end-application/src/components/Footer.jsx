const Footer = () => {
    return (
        <footer className="w-screen fixed bottom-0 p-3 bg-lime-950 text-stone-200 flex ">
            <div className="justify-start self-center flex-auto basis-1/2">
            <p>&copy; 2025 Caleb Hallock</p>
            </div>
            {/* TODO: Add links for GitHub repo & Portfolio Links */}
            <div className="flex items-stretch basis-1/2">
            <a className="basis-1/2 text-center">
                <i className="fa-brands fa-github fa-2x text-stone-200"></i>
            </a>
            <a className="basis-1/2 text-center self-center">Portfolio</a>      
            </div>
        </footer>
    )
}

export default Footer;