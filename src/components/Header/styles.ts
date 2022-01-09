import styled from 'styled-components';

export const Container = styled.div`
  min-height: 10vh;

  padding: 20px 140px;
  display: flex;
  justify-content: space-between;
  align-items: center;

  > div {
    display: flex;
    align-items: center;
    gap: 80px;

    > span {
      cursor: pointer;
    }
  }

  button {
    display: flex;
    flex-direction: column;
    align-items: center;

    border: none;
    color: #888;
    font-size: 20px;
    cursor: pointer;
    gap: 2px;

    &:hover { 
      text-decoration: underline;
    }

    > hr {
      width: 50px;
      border: 0;
      height: 5px; 
      background-color: #ED9F66;
      border-radius: 100px;
    }
  }
`;
