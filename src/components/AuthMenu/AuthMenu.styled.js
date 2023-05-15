import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const AuthNavLink = styled(NavLink)`
  font-size: 20px;
  padding: 0px 10px;
  border: 1px solid black;
  background-color: #5472ea47;
  height: 30px;
  text-decoration: none;
  color: black;

  :hover {
    background-color: #4343b0;
    color: white;
  }

  &.active {
    background-color: #4343b0;
    color: white;
  }
`;

export const AuthMenuContainer = styled.div`
  display: flex;
  gap: 10px;
`;
