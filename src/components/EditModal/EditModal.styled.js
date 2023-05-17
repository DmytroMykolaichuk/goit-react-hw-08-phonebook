import styled from 'styled-components';
export const Modal = styled.div`
  position: relative;
  background-color: #7eafd9;
  padding: 40px;
  max-width: 100%;
`;

export const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgba(0, 0, 0, 0.767);
  padding: 20px;
`;

export const FormModal = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
`;

export const LabelModal = styled.label`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 30px;
  font-size: 20px;
  width: 100%;
`;

export const InputModal = styled.input`
  padding-left: 15px;
  height: 30px;
  background-color: transparent;
  border: 1px solid #4343b0;
  border-left: none;
  border-top: none;
  outline: none;
`;

export const BtnCloseModal = styled.button`
  cursor: pointer;
  margin: 0;
  position: absolute;
  top: 10px;
  right: 10px;
  background-color: transparent;
  border: none;
  :hover {
    color: white;
  }
`;

export const ButtonEdit = styled.button`
  font-size: 20px;
  font-weight: 700;
  padding: 10px;
  width: 100%;
  border-radius: 10px;
  /* background-color: #5472ea47; */
  background-color: white;
  color: #4343b0;

  :hover {
    background-color: #4343b0;
    color: white;
  }
`;
