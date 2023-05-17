import styled from 'styled-components';

export const ListContacts = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 10px;
  margin-top: 25px;
`;

export const ItemsContact = styled.li`
  display: flex;
  justify-content: space-between;
`;

export const Contact = styled.p`
  font-size: 25px;
  //   font-weight: 700;
  border-bottom: 1px dashed #4343b0;
  width: 100%;
  padding: 0 10px;
`;

export const Button = styled.button`
  font-size: 20px;
  padding: 0px 10px;
  border: 1px solid black;
  background-color: #5472ea47;
  height: 30px;

  :hover {
    background-color: #4343b0;
    color: white;
  }
`;
export const ButtonContainer = styled.div`
  display: flex;
  gap: 8px;
`;
