import { useDispatch, useSelector } from 'react-redux';
import css from './ContactList.module.css';
import { deleteContact } from 'redux/contactsRedux';

export const ContactList = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(state => state.contactsReducer.contacts);
  const filter = useSelector(state => state.contactsReducer.filter);

  const normalizeFilter = filter.toLowerCase().trim();

  const filteredContacts = contacts.filter(contact => {
    return contact.name.toLowerCase().includes(normalizeFilter);
  });

  return (
    <ul className={css.list}>
      {contacts.length > 0 &&
        filteredContacts.map(contact => {
          return (
            <li className={css.listItem} key={contact.id}>
              <p className={css.itemName}>{contact.name}:</p>
              <p className={css.itemTel}>{contact.number}</p>
              <button
                onClick={() => dispatch(deleteContact(contact.id))}
                className={css.button}
                type="button"
              >
                delete
              </button>
            </li>
          );
        })}
    </ul>
  );
};
