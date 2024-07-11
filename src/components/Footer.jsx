import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF, faTwitter, faInstagram, faYoutube } from '@fortawesome/free-brands-svg-icons';

const Footer = () => (
    <footer className="bg-purple text-white py-10 px-7">
        <div className="container mx-auto flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-center md:text-left">
                <h2 className="text-2xl font-bold">Jukebox Jamboreel</h2>
                <p className="mt-2 text-white">Julio 2024, Bogotá</p>
            </div>
        </div>
    </footer>
);

export default Footer;
