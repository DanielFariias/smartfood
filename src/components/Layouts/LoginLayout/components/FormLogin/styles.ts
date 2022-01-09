import styled from 'styled-components';

export const Container = styled.div`
  width: 100vw;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 40px;

  h1 {
    font-size: 36px
  }
`;

export const Card = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  min-width: 600px;
  min-height: auto;
  background-color: #F6F6FA;
  border: 1px solid rgba(0, 0, 0, 0.2);
  border-radius: 12px;
  box-shadow: 4px 4px 6px rgba(0, 0, 0, 0.2);
  padding-bottom: 40px;

  form {
    height: 80%;
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 40px 60px 0;
    gap: 50px;
    margin-top: 20px;

    > div {
      display: flex;
      flex-direction: column;
      gap: 20px;
      width: 100%;
    }
  }

  > button {
    margin-top: 12px;
    border: none;
    background-color: transparent;

    font-size: 18px;

    cursor: pointer;


    &:hover {
      text-decoration: underline;
    }
  }

`