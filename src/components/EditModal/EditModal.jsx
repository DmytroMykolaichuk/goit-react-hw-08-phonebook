import { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { editContact } from 'redux/contacts/operations';
import {
  Modal,
  Overlay,
  FormModal,
  BtnCloseModal,
  LabelModal,
  InputModal,
  ButtonEdit,
} from './EditModal.styled';
import { CgCloseO } from 'react-icons/cg';

export const EditModal = ({ name, number, idUser, isCloseModal }) => {
  const [userName, setUserName] = useState(name);
  const [userNumber, setUserNamber] = useState(number);

  const dispatch = useDispatch();

  function handleCange(e) {
    const { name, value } = e.currentTarget;
    name === 'number' ? setUserNamber(value) : setUserName(value);
  }
  function onSubmit(e) {
    e.preventDefault();
    dispatch(editContact({ idUser, userName, userNumber }));
    isCloseModal();
  }
  useEffect(() => {
    function handleCloseECC(e) {
      if (e.key === 'Escape') {
        isCloseModal();
      }
    }

    window.addEventListener('keydown', handleCloseECC);

    return () => window.removeEventListener('keydown', handleCloseECC);
  }, [isCloseModal]);

  function handleCloseBackdrop(e) {
    if (e.currentTarget === e.target) {
      isCloseModal();
    }
  }
  return (
    <Overlay onClick={handleCloseBackdrop}>
      <Modal>
        <FormModal onSubmit={onSubmit}>
          <LabelModal>
            Name :
            <InputModal
              name="name"
              type="text"
              placeholder={name}
              value={userName}
              onChange={handleCange}
            />
          </LabelModal>
          <LabelModal>
            Number :
            <InputModal
              name="number"
              type="tel"
              placeholder={number}
              value={userNumber}
              onChange={handleCange}
            />
          </LabelModal>
          <BtnCloseModal type="button" onClick={isCloseModal}>
            <CgCloseO size="20" />
          </BtnCloseModal>
          <ButtonEdit type="submit">Edit</ButtonEdit>
        </FormModal>
      </Modal>
    </Overlay>
  );
};
