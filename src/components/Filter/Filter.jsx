import { useDispatch } from 'react-redux';
import css from './Filter.module.css';
import { setFilter } from 'redux/contactsRedux';

export const Filter = () => {
  const dispatch = useDispatch();

  const handleFilter = e => {
    const filterName = e.target.value;
    dispatch(setFilter(filterName));
  };

  return (
    <label className={css.label}>
      Find contacts by name
      <input className={css.input} onChange={handleFilter} type="text" />
    </label>
  );
};
