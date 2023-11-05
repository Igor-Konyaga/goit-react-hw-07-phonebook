import { useDispatch } from 'react-redux';
import css from './Contact.module.css';
import { deleteContact } from 'redux/contactsRedux';
import { RotatingLines } from 'react-loader-spinner';
import { useState } from 'react';
import Notiflix from 'notiflix';

export const Contact = ({ id, name, phone }) => {
  const dispatch = useDispatch();

  const [isLoading, setIsLoading] = useState(false);

  return (
    <li className={css.listItem}>
      <p className={css.itemName}>{name}:</p>
      <p className={css.itemTel}>{phone}</p>
      <button
        onClick={() => {
			  setIsLoading(true);
			  dispatch(deleteContact(id)
			  );
			  Notiflix.Notify.success(`Contact ${name} successfully deleted`)
        }}
        className={css.button}
        type="button"
      >
        {isLoading ? (
          <RotatingLines
            strokeColor="grey"
            strokeWidth="4"
            animationDuration="0.75"
            width="16"
            visible={true}
          />
        ) : (
          'delete'
        )}
      </button>
    </li>
  );
};
