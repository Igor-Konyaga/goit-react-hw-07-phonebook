import { useDispatch, useSelector } from 'react-redux';
import css from './ContactList.module.css';
import { useEffect } from 'react';
import { requestContacts } from 'redux/contactsRedux';
import { RotatingLines } from 'react-loader-spinner';
import { Contact } from './Contact/Contact';

export const ContactList = () => {
  const dispatch = useDispatch();

  const contacts = useSelector(state => state.contactsReducer.contacts.items);
  const filter = useSelector(state => state.contactsReducer.filter);
  const isLoading = useSelector(
    state => state.contactsReducer.contacts.isLoading
  );

  const normalizeFilter = filter.toLowerCase().trim();

  useEffect(() => {
    dispatch(requestContacts());
  }, [dispatch]);

  const filteredContacts = contacts.filter(contact => {
    return contact.name.toLowerCase().includes(normalizeFilter);
  });

  return (
    <>
      <ul className={css.list}>
        {isLoading && (
          <li className={css.loader}>
            <RotatingLines
              strokeColor="grey"
              strokeWidth="5"
              animationDuration="0.75"
              width="60"
              visible={true}
            />
          </li>
        )}
        {contacts.length > 0 &&
          filteredContacts.map(contact => {
            return (
              <Contact
                key={contact.id}
                id={contact.id}
                name={contact.name}
                phone={contact.phone}
              />
            );
          })}
      </ul>
    </>
  );
};
