import React, { useState } from 'react';
import CompraModal from './CompraModal';
import Pase from './Pase';

const Boletos = () => {
    const [showModal, setShowModal] = useState(false);
    const [tipoPase, setTipoPase] = useState('');
    const [precio, setPrecio] = useState('');

    const handleOpenModal = (tipo, precio) => {
        setTipoPase(tipo);
        setPrecio(precio);
        setShowModal(true);
    };

    const handleCloseModal = () => {
        setShowModal(false);
    };

    const pases = [
        {
            nombre: 'Pase 1 Día',
            incluye: [
                'Acceso a ambos escenarios',
                'Bebida Ilimitada',
                'Camisa / Pulsera del Evento',
            ],
            precio: '$100',
        },
        {
            nombre: 'Pase 2 Días',
            incluye: [
                'Acceso a ambos escenarios',
                'Bebida Ilimitada',
                'Camisa / Pulsera del Evento',
                'Acceso VIP',
            ],
            precio: '$180',
        },
    ];

    return (
        <section id="boletos" className="contenedor-boletos py-10">
            <h3 className="text-6xl text-center text-black mb-10">Boletos</h3>

            <div className="boletos container mx-auto grid grid-cols-1 md:grid-cols-2 gap-10">
                {pases.map((pase, index) => (
                    <Pase
                        key={index}
                        nombre={pase.nombre}
                        incluye={pase.incluye}
                        precio={pase.precio}
                        onComprar={() => handleOpenModal(pase.nombre, pase.precio)}
                    />
                ))}
            </div>

            <CompraModal show={showModal} onClose={handleCloseModal} tipoPase={tipoPase} precio={precio} />
        </section>
    );
};

export default Boletos;

