import { useEffect, useRef, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes, faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons';

const Galeria = ({ id }) => {
    const initialized = useRef(false);
    const [currentImage, setCurrentImage] = useState(null);

    useEffect(() => {
        if (initialized.current) return;
        initialized.current = true;

        const createGallery = () => {
            const CANTIDAD_IMAGENES = 16;
            const galeria = document.querySelector(`#${id} .galeria-imagenes`);

            for (let i = 1; i <= CANTIDAD_IMAGENES; i++) {
                const imagen = document.createElement('IMG');
                imagen.src = `src/img/gallery/full/${i}.jpg`;
                imagen.alt = 'Imagen Galería';

                imagen.onclick = () => {
                    setCurrentImage(i);
                };

                galeria.appendChild(imagen);
            }
        };

        createGallery();
    }, [id]);

    const mostrarImagen = (i) => {
        setCurrentImage(i);
    };

    const cerrarModal = () => {
        setCurrentImage(null);
    };

    const siguienteImagen = () => {
        setCurrentImage((prev) => (prev === 16 ? 1 : prev + 1));
    };

    const anteriorImagen = () => {
        setCurrentImage((prev) => (prev === 1 ? 16 : prev - 1));
    };

    return (
        <section id={id} className="galeria py-10">
            <h3 className="text-6xl text-center mb-10">Galería</h3>
            <div className="galeria-imagenes grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4"></div>
            {currentImage && (
                <div className="modal fixed inset-0 bg-black bg-opacity-50 grid place-items-center">
                    <div className="relative">
                        <img src={`src/img/gallery/full/${currentImage}.jpg`} alt="Imagen Galería" className="max-w-full h-auto" />
                        <button className="btn-cerrar absolute top-4 right-4 w-10 h-10 rounded-full bg-white text-black font-bold grid place-items-center cursor-pointer" onClick={cerrarModal}>
                            <FontAwesomeIcon icon={faTimes} />
                        </button>
                        <button className="absolute left-4 top-1/2 transform -translate-y-1/2 text-white text-4xl" onClick={anteriorImagen}>
                            <FontAwesomeIcon icon={faChevronLeft} />
                        </button>
                        <button className="absolute right-4 top-1/2 transform -translate-y-1/2 text-white text-4xl" onClick={siguienteImagen}>
                            <FontAwesomeIcon icon={faChevronRight} />
                        </button>
                    </div>
                </div>
            )}
        </section>
    );
};

export default Galeria;

