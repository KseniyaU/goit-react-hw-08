import { IoPerson } from "react-icons/io5";
import { IoCall } from "react-icons/io5";
import { useDispatch } from 'react-redux'
import {  deleteContacts, fetchContacts} from '../../redux/contacts/operations'
import { ModalWindowDel } from '../ModalWindowDel/ModalWindowDel'
import { useRef, useState } from "react";
import React from "react";


import css from '../Contact/Contact.module.css'

export const Contact = ({ contact: { id, name, number } }) => {
    const dispatch = useDispatch();
  
    
    const onDeleteContact = (id) => {
        dispatch( deleteContacts(id));
      dispatch(fetchContacts());
        
    }

     const subtitle = React.useRef(null);
    const [modalIsOpen, setIsOpen] = React.useState(false);

    function openModal() {
      setIsOpen(true);
    }

    function afterOpenModal() {
      // references are now sync'd and can be accessed.
      if (subtitle.current) {
        subtitle.style.color = "#f00";
      }
    }

    function closeModal() {
      setIsOpen(false);
    }

    return (
        <>
            <div>
                <p><IoPerson />  { name}</p>
                <p><IoCall />  {number}</p>
            </div>
            <button onClick={() => openModal()} type="button" className={css.btnDelete}>Delete</button>
            {modalIsOpen && (
                <ModalWindowDel
                    isOpen={modalIsOpen}
                    onClose={() => closeModal()}
                    onDeleteContact={() => onDeleteContact(id)}
                    onAfter={afterOpenModal}
        />
      )}
        </>
    )
}

                    