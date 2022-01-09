import styled from 'styled-components';

export const Container = styled.button`
  border: none;
  border-radius: 10px;
  background-color: #F88A10;
  width: 200px;
  height: 50px;

  font-size: 22px;
  color: #f1f1f1;
  font-weight: bold;
  cursor: pointer;

  transition: .4s;
  &:hover {
    filter: brightness(0.85)
  }
`;
