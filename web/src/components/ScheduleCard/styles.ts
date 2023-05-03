import styled from "styled-components";


export const CardContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  width: 53.1rem;
  border: 1px solid #DBAC2C;
  padding: 2rem 3rem;
  border-radius: 6px 36px 6px 36px;

  > div {
    display: flex;
    flex-direction: column;
    line-height: 1.5;

    strong {
      text-transform: capitalize;
    }
  }

  em {
    font-style: normal;

    > strong {
      text-transform: capitalize;
    }
  }

  button {
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 0.5rem;
    border: 1px solid ${props => props.theme.yellow};
    background: ${props => props.theme.yellow};
    padding: 0.35rem 1.3rem;
    font-family: 'Baloo 2';
    font-weight: 700;
    cursor: pointer;
    border-radius: 6px 16px 6px 16px;
    transition: border .2s;

    &:hover {
      border: 1px solid ${props => props.theme["gray-500"]};
    }
  }

  @media screen and (max-width: 400px) {
      width: 100%;
      padding: 2rem 1rem;
      margin: 0 auto;
      flex-direction: column;
      gap: 1rem;
    }
`