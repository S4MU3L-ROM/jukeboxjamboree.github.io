import React, { useState } from 'react';

const CompraModal = ({ show, onClose, tipoPase, precio }) => {
    const [nombre, setNombre] = useState('');
    const [cantidad, setCantidad] = useState(1);

    if (!show) return null;

    const handleSubmit = (e) => {
        e.preventDefault();
        alert(`Nombre: ${nombre}\nCantidad de boletos: ${cantidad}`);
        onClose();
    };

    return (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
            <div className="bg-white p-6 rounded-lg shadow-lg w-full max-w-lg">
                <div className="flex justify-between items-center mb-4">
                    <h2 className="text-2xl font-bold">Compra de Boletos</h2>
                    <button onClick={onClose} className="text-xl font-bold">&times;</button>
                </div>
                <p className="mb-4">Estás comprando el {tipoPase} por {precio}.</p>
                <form onSubmit={handleSubmit}>
                    <div className="mb-4">
                        <label className="block text-sm font-bold mb-2">Nombre</label>
                        <input
                            type="text"
                            className="w-full border rounded py-2 px-3"
                            value={nombre}
                            onChange={(e) => setNombre(e.target.value)}
                            required
                        />
                    </div>
                    <div className="mb-4">
                        <label className="block text-sm font-bold mb-2">Email</label>
                        <input
                            type="email"
                            className="w-full border rounded py-2 px-3"
                            required
                        />
                    </div>
                    <div className="mb-4">
                        <label className="block text-sm font-bold mb-2">Cantidad</label>
                        <input
                            type="number"
                            min="1"
                            className="w-full border rounded py-2 px-3"
                            value={cantidad}
                            onChange={(e) => setCantidad(e.target.value)}
                            required
                        />
                    </div>
                    <button type="submit" className="w-full bg-blue-500 text-white py-2 rounded">Comprar</button>
                </form>
            </div>
        </div>
    );
};

export default CompraModal;
