import styled from 'styled-components';

export const ContainerUserMenu = styled.div`
  display: flex;
  justify-content: space-between;
`;
export const ButtonLogOut = styled.button`
  font-size: 14px;
  padding: 5px 10px;
  border-radius: 10px;
  background-color: #5472ea47;

  :hover {
    background-color: #4343b0;
    color: white;
  }
`;

export const WelcomeUserText = styled.p`
  font-size: 20px;

  & span {
    font-weight: 700;
    color: rgb(67, 67, 176);
  }
`;
