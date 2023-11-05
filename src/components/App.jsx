import css from './App.module.css';
import { ContactForm } from './Contact-form/ContactForm';
import { Filter } from './Filter/Filter';
import { ContactList } from './Contact-list/ContactList';
import { useSelector } from 'react-redux';

export const App = () => {
  const error = useSelector(state => state.contactsReducer.contacts.error);
  return (
    <div className={css.section}>
      {error !== null ? (
        <p className={css.error}> {error}</p>
      ) : (
        <>
          <h1 className={css.title}>Phonebooks</h1>
          <ContactForm />
          <h2 className={css.title}>Contacts</h2>
          <Filter />
          <ContactList />
        </>
      )}
    </div>
  );
};
