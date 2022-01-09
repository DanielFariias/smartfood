import styled from 'styled-components';

export const Container = styled.div`
  min-height: 15vh;

  display: flex;
  align-items: center;
  justify-content: space-between;

  padding: 20px 140px;

  border-top: 1px solid #D9DBDD;

  > .social-media {
    font-size: 18px;
    text-align: center;
    
    div {
      padding-top: 10px;
      display: flex;
      align-items: center;
      justify-content: center;
      gap: 10px;

      > button {
        cursor: pointer;
        border: 0;
      }
    }
  }
`;
