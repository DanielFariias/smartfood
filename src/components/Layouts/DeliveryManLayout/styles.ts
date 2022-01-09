import styled from 'styled-components';

export const Container = styled.div`
  min-height: 75vh;
  display: flex;
  justify-content:space-between;
  gap: 32px;
  align-items: center;
  margin: 0 140px;

  > div { 
    width: 450px;
    display: flex;
    flex-direction: column;

    h1 {
      font-size: 36px;
      font-weight: 500;
    }

    p {
      margin: 20px 0 30px;
      font-size: 20px;
      font-weight: 300;
      width: 300px;
      color: #888;
    }

    hr {
      border: 0;
      height: 3px;
      background: #DA5151;
      width: 400px;
    }

    button {
      margin-top: 50px;
      width: 170px;
      height: 40px;

      border: 0;
      border-radius: 8px;

      background-color: #F88A10;
      box-shadow: 4px 4px 10px #888;

      color: #fff;
      font-size: 20px;
      cursor: pointer;

      transition: .4s;
      &:hover {
        filter: brightness(0.85)
      }
    }
  }
  svg:hover {
    transition: .2s;
    width: 550px;
    height: 550px;
  }
`;
