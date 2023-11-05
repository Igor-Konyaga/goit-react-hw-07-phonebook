import css from './ContactForm.module.css';
import Notiflix from 'notiflix';
import { RotatingLines } from 'react-loader-spinner';
import { useDispatch, useSelector } from 'react-redux';
import { addContact, setIsLoadingForm } from 'redux/contactsRedux';

export const ContactForm = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(state => state.contactsReducer.contacts.items);
  const isLoadingForm = useSelector(
    state => state.contactsReducer.setIsLoadingForm
  );

  const handleSubmit = e => {
    e.preventDefault();

    const name = e.currentTarget.elements.name.value;
    const phone = e.currentTarget.elements.number.value;

    const contact = {
      name,
      phone,
    };

    const audit = contacts.some(contact => contact.name === name);

    if (audit) {
      Notiflix.Notify.failure(`The name ${name} already exists in contacts`);
      e.currentTarget.reset();
      return;
    } else {
      Notiflix.Notify.success(`Contact ${name} successfully added`);
      dispatch(setIsLoadingForm(true));
      dispatch(addContact(contact));
      dispatch(setIsLoadingForm(false));
    }

    e.currentTarget.reset();
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
        {isLoadingForm ? (
          <RotatingLines
            strokeColor="grey"
            strokeWidth="4"
            animationDuration="0.75"
            width="18"
            visible={true}
          />
        ) : (
          ' add contact'
        )}
      </button>
    </form>
  );
};
