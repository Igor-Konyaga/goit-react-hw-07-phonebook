import css from './ContactForm.module.css';
import { nanoid } from 'nanoid';
import Notiflix from 'notiflix';
import { useDispatch, useSelector } from 'react-redux';
import { addContact } from 'redux/contactsRedux';

export const ContactForm = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(state => state.contactsReducer.contacts);

  const handleSubmit = e => {
    e.preventDefault();

    const name = e.currentTarget.elements.name.value;
    const number = e.currentTarget.elements.number.value;

    const contact = {
      name,
      number,
      id: nanoid(),
    };

    const audit = contacts.some(contact => contact.name === name);

    if (audit) {
      Notiflix.Notify.failure(`The name ${name} already exists in contacts`);
      e.currentTarget.reset();
      return;
    } else {
      dispatch(addContact(contact));
		e.currentTarget.reset();
    }
  };

  return (
    <form onSubmit={handleSubmit} className={css.form}>
      <label className={css.label}>
        Name
        <input className={css.input} type="text" name="name" required />
      </label>
      <label className={css.label}>
        Number
        <input className={css.input} type="tel" name="number" required />
      </label>

      <button className={css.btn} type="submit">
        add contact
      </button>
    </form>
  );
};
