import styled from "styled-components";


export const ConsultContainer = styled.main`
    max-width: 70%;
    margin: 0 auto;
    min-height: 80vh;
    padding: 1rem 0;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 2rem;
    h1 {
      font-size: 1.5rem;
    }
    h1, span {
      text-align: center;
    }
    img {
      width: 200px;
    }
   
    div {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      gap: 1rem;

      span {
        font-weight: 300;
      }

      button {
        border: none;
        border: 1px solid ${props => props.theme["green-card"]};
        padding: 0.5rem 2rem;
        background: ${props => props.theme.white};
        border-radius: 6px;
      }
    }

`