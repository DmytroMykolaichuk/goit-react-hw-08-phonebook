import styled from 'styled-components';

export const InputAuth = styled.input`
  padding-left: 15px;
  height: 30px;
  background-color: transparent;
  border: 1px solid #4343b0;
  border-left: none;
  border-top: none;
  outline: none;
  color: #4343b0;
`;

export const LabelAuth = styled.label`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 30px;
  font-size: 20px;
  width: 100%;
`;

export const FormAuth = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
`;

export const ContainerFormAuth = styled.div`
  display: flex;
  justify-content: center;
`;

export const ButtonAuth = styled.button`
  font-size: 20px;
  font-weight: 700;
  padding: 10px;
  width: 100%;
  border-radius: 10px;
  background-color: #5472ea47;

  :hover {
    background-color: #4343b0;
    color: white;
  }
`;
