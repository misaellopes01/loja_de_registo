import styled from "styled-components";

export const DashboardContainer = styled.section`
  width: 100%;
  padding: 1rem;
  background-color: ${props => props.theme["gray-100"]};
  display: flex;
  flex-direction: column;
  h1 {
    text-align: center;
    text-transform: uppercase;
    font-size: 2rem;
    line-height: 2;
    font-family: 'Baloo 2', sans-serif;
  }

  section {
    display: grid;
    grid-template-columns: 1fr 1fr;
    justify-items: center;
    row-gap: 3rem;
    padding-top: 2rem;

    .card {
      width: 25rem;
      height: 12rem;
      background-color: ${props => props.theme["gray-100"]};
      border-radius: 6px;
      box-shadow: 0 0 15px ${props => props.theme["gray-300"]};
      padding: 1rem;

      strong {
        font-size: 1.2rem;
        text-transform: uppercase;
        font-weight: 300;
      }

      > div {
        display: flex;
        height: 100%;
        justify-content: space-between;
        align-items: center;
        span {
          font-size: 5rem;
          font-weight: 300;
        }
      }
    }
    
  }
`