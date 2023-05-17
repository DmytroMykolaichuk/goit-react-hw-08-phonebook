import styled from 'styled-components';
import {
  Form as AddContactForm,
  Field,
  ErrorMessage as FormikErrorMessage,
} from 'formik';

export const Form = styled(AddContactForm)`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin: 10px auto;
  gap: 12px;
  max-width: 332px;
`;

export const Label = styled.label`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 5px;
  font-size: 20px;
  width: 100%;
  // color: #4343b0;
`;

export const ButtonSubmit = styled.button`
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

export const Input = styled(Field)`
  padding-left: 15px;
  height: 30px;
  background-color: transparent;
  /* width: 70%; */

  border: 1px solid #4343b0;
  border-left: none;
  border-top: none;
  outline: none;
  color: #4343b0;

  /* :hover,
  :focus {
    box-shadow: 0px 0px 3px 1px #4343b0;
  } */
`;

export const ErrorMessage = styled(FormikErrorMessage)`
  color: red;
  font-size: 12px;
`;
