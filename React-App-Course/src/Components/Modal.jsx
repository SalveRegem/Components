import React, { useState, useEffect } from 'react';
import ReactModal from 'react-modal';

ReactModal.setAppElement("#root");

const CarModal = ({ car }) => {
    const [modalIsOpen, setModalIsOpen] = useState(false);

    const openModal = () => {
        setModalIsOpen(true);
    };

    const closeModal = () => {
        setModalIsOpen(false);
    };

    useEffect(() => {
        const body = document.querySelector('body');

        // Ajouter la classe lors de l'ouverture de la modal
        if (modalIsOpen) {
            body.classList.add('modal-open');
        } else {
            body.classList.remove('modal-open');
        }

        // Nettoyer la classe lorsque le composant est démonté
        return () => {
            body.classList.remove('modal-open');
        };
    }, [modalIsOpen]);

    return (
        <>
            <button onClick={openModal} className='glowing-btn'><span className='glowing-txt'>C<span className='faulty-letter'>L</span>ICK</span></button>
            {modalIsOpen && (
                <ReactModal
                    isOpen={modalIsOpen}
                    onRequestClose={closeModal}
                    contentLabel={`Fenêtre de la voiture sélectionnée - ${car.name}`}
                    className="modal shadow-inset-center" 
                    style={{
                        overlay: {
                            zIndex: 1000,
                            backgroundColor: 'transparent',
                            color: 'black'
                        }
                    }}
                >
                    <div className='modal-content'>
                        <div className="modal-header">
                            <button onClick={closeModal} className="close-button animated-button">
                                <span>X</span>
                                <span></span>
                            </button>
                        </div>
                        <div className="modal-body">
                            <h2>Description de la voiture</h2>
                            <p>{car.description ? car.description : "Aucune données disponible"}</p>
                        </div>
                    </div>
                </ReactModal>
            )}
        </>
    );
};

export default CarModal;