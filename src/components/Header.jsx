const Header = () => {
    return (
        <header className="header bg-purple py-4 px-10">
            <div className="container mx-auto flex justify-between items-center">
                <h1 className="text-white text-4xl">Jukebox Jamboree</h1>
                <nav className="navegacion-principal flex space-x-4">
                    <a href="#lineup" className="text-white text-xl hover:text-teal">Line Up</a>
                    <a href="#galeria" className="text-white text-xl hover:text-teal">Galería</a>
                    <a href="#boletos" className="text-white text-xl hover:text-teal">Boletos</a>
                </nav>
            </div>
        </header>
    );
}

export default Header;
