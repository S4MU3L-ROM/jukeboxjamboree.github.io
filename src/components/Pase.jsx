import React from 'react';

const Pase = ({ nombre, incluye, precio, onComprar }) => {
    return (
        <div className="pase transform transition-transform hover:scale-110 p-4 bg-white shadow-lg my-14">
            <p className="pase-nombre text-3xl font-bold text-center text-black mb-4">{nombre}</p>
            <header className="pase-header py-2">
                <p className="text-white text-center text-2xl uppercase">Incluye</p>
            </header>
            <div className="pase-body">
                <ul className="list-none m-0 p-0">
                    {incluye.map((item, index) => (
                        <li key={index} className="py-4 border-b border-gray-200">{item}</li>
                    ))}
                </ul>
            </div>
            <footer
                className="pase-footer bg-white py-8 cursor-pointer"
                onClick={onComprar}
            >
                <p className="text-3xl font-bold bg-purple-700 text-white text-center py-2 rounded">Comprar por {precio}</p>
            </footer>
        </div>
    );
};

export default Pase;
