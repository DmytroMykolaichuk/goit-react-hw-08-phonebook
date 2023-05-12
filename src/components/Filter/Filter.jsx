import { LabelFiter, InputFilter } from './Filter.styled';
import { useDispatch } from 'react-redux';
import { queryFilter } from 'redux/filterSlice';

export const Filter = () => {
  const dispatch = useDispatch();

  const handleChangeFilter = e => {
    dispatch(queryFilter(e.currentTarget.value));
  };

  return (
    <LabelFiter>
      Find contacts by name:
      <InputFilter type="text" name="filter" onChange={handleChangeFilter} />
    </LabelFiter>
  );
};
