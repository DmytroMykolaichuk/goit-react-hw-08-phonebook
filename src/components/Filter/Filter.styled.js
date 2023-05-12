import styled from 'styled-components';

export const LabelFiter = styled.label`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  font-size: 20px;
  // color: #4343b0;
  margin-top: 10px;
  width: 100%;
  gap: 15px;
`;

export const InputFilter = styled.input`
  padding-left: 15px;
  height: 30px;
  background-color: transparent;

  border: 1px solid #4343b0;
  border-left: none;
  border-top: none;
  outline: none;
  color: #4343b0;

  // :hover,
  // :focus {
  //   box-shadow: 0px 0px 3px 1px #4343b0;
  // }
`;
