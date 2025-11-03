const Footer = () => {
    return (
        <footer class="w-screen fixed bottom-0 p-3 bg-lime-950 text-white flex ">
            <div class="justify-start self-center flex-auto basis-1/2">
            <p>&copy; 2025 Caleb Hallock</p>
            </div>
            <div class="flex items-stretch basis-1/2">
            <a class="basis-1/2 text-center">
                <i class="fa-brands fa-github fa-2x"></i>
            </a>
            <a class="basis-1/2 text-center">Portfolio</a>      
            </div>
        </footer>
    )
}

export default Footer;