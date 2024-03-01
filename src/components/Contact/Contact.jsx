import { IoPerson } from "react-icons/io5";
import { IoCall } from "react-icons/io5";
import { useDispatch } from 'react-redux'
import {  deleteContacts, fetchContacts} from '../../redux/contacts/operations'


import css from '../Contact/Contact.module.css'

export const Contact = ({ contact: { id, name, number } }) => {
      const dispatch = useDispatch();
  
    
    const onDeleteContact = (id) => {
        dispatch( deleteContacts(id));
        dispatch(fetchContacts())
        // console.log(id);
 }

    return (
        <>
            <div>
                <p><IoPerson />  { name}</p>
                <p><IoCall />  {number}</p>
            </div>
            <button onClick={() => onDeleteContact(id)} type="button" className={ css.btnDelete}>Delete</button>
        </>
    )
}
