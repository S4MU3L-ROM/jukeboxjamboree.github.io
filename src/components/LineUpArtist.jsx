import React, { useState } from 'react';

// Componente modal para mostrar los detalles del artista
const ArtistModal = ({ artist, onClose }) => {
    if (!artist) return null;

    return (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
            <div className="bg-white p-4 rounded-lg shadow-lg max-w-sm">
                <h2 className="text-xl font-bold">{artist.name}</h2>
                <img src={artist.image} alt={artist.name} className="my-3 max-h-60 w-full object-cover" />
                <p>{artist.description}</p>
                <button className="mt-3 py-2 px-4 bg-blue-500 text-white rounded hover:bg-blue-700" onClick={onClose}>Cerrar</button>
            </div>
        </div>
    );
};

const LineupArtist = ({ lineup }) => {
    const [selectedArtist, setSelectedArtist] = useState(null);

    const handleArtistClick = (artist) => {
        setSelectedArtist(artist);  // Establece el artista seleccionado para el modal
    };

    const closeModal = () => {
        setSelectedArtist(null);  // Cierra el modal eliminando el estado del artista seleccionado
    };

    return (
        <div>
            <h3>Line Up</h3>
            <ul>
                {lineup.map(artist => (
                    <li key={artist.id} className="cursor-pointer hover:underline" onClick={() => handleArtistClick(artist)}>
                        {artist.time} | {artist.name}
                    </li>
                ))}
            </ul>
            <ArtistModal artist={selectedArtist} onClose={closeModal} />
        </div>
    );
};

export default LineupArtist;
