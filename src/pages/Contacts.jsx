
import { useDispatch } from 'react-redux'
import { useEffect } from 'react'
import { ContactForm } from '../components/ContactForm/ContactForm'
import { SearchBox } from '../components/SearchBox/SearchBox'
import { ContactList } from '../components/ContactList/ContactList'
import { fetchContacts } from '../redux/contacts/operations'

export default function Contacts() {
    const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <div>
      <h1>Phonebook</h1>
      <ContactForm ></ContactForm>
      <SearchBox></SearchBox>
      <ContactList></ContactList>
      
    </div>
  )
}