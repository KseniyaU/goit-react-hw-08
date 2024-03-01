import { Contact } from '../Contact/Contact'
import css from '../ContactList/ContactList.module.css'
import { useSelector} from 'react-redux'


export const ContactList = () => {
    
     const contacts = useSelector(state => state.contacts.items);
    // console.log(contacts);
    const filterValue = useSelector(state => state.filters);
 


    const allContacts = contacts.filter(user =>
    user.name.toLowerCase().includes(filterValue.toLocaleLowerCase())
    )

  
    return (<div>
        <ul className={ css.allContacts}>
            {
                allContacts.map(value => (
                    
                    <li className={css.contactContainet} key={ value.id}>
                         <Contact  contact={value} />
                    </li>
            )) }
        
        </ul>
    </div>
)
}