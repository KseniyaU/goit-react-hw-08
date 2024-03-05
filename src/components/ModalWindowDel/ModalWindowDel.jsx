import React from "react";
import Modal from 'react-modal';
import css from '../ModalWindowDel/ModalWindowDel.module.css'

const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
        width: '40%',
    height: '10%',
    transform: 'translate(-50%, -50%)',
  },
};

Modal.setAppElement('#root');

export const ModalWindowDel = ({ isOpen, onClose, onDeleteContact }) => {
    const handleDelete = () => {
        onDeleteContact();
        onClose();
    }

    return (
        <Modal
            isOpen={isOpen}
            onRequestClose={onClose}
            style={customStyles}
            
        >
            <div>
                <b>Точно бажаєте видалити контакт?</b>
                <div className={css.containerYesNo}>
                    <button onClick={handleDelete} className={css.btnYesNo}>Так</button>
                    <button onClick={onClose} className={css.btnYesNo}>Ні</button>
                </div>
            </div>
        </Modal>
    );
}