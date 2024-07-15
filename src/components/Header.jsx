import React from 'react';
import { Link } from 'react-router-dom';

const Header = ({ showLoginLink }) => {
    return (
        <header className="header bg-purple py-4 px-10">
            <div className="container mx-auto flex justify-between items-center">
                <h1 id="user" className="text-white text-4xl"></h1>
                <nav className="navegacion-principal flex space-x-4">
                    <Link to="/" className="text-white text-xl hover:text-teal">Inicio</Link>
                    {showLoginLink && <Link to="/LoginRegister" className="text-white text-xl hover:text-teal">Login</Link>}
                </nav>
            </div>
        </header>
    );
};

export default Header;

