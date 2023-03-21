import styled from "styled-components";

export const SchedulingContainer = styled.section`
  width: 100%;
  padding: 1rem;
  background-color: ${props => props.theme["gray-100"]};
  h1 {
    text-align: center;
    text-transform: uppercase;
    font-size: 2rem;
    line-height: 3.5;
    font-family: 'Baloo 2', sans-serif;
  }

  section {
    width: 100%;
    height: 100%;
    display: flex;
    padding: 1rem 3rem;
    flex-direction: column;
    gap: 2rem;

    .search {
      width: 100%;
      display: flex;
      flex-direction: column;
      padding: 1rem;
      box-shadow: 0 0 15px ${props => props.theme["gray-300"]};
      border-radius: 6px;
      gap: 0.5rem;

      h2 {
        text-transform: uppercase;
        font-weight: 300;
        text-align: center;
        font-size: 1.3rem;
      }
      .contentForm {
        display: flex;
        justify-content: center;
        align-items: center;
        gap: 0.5rem;
        color: ${props => props.theme["gray-600"]};
        font-size: 1rem;

        

        select {
          font-size: 1rem;
          border: none;
          background: ${props => props.theme.white};
          font-family: 'Roboto', sans-serif;
          text-transform: uppercase;
          padding: .25rem;
          font-weight: 300;
          color: ${props => props.theme["gray-600"]};
          border-radius: 4px;
        }
        em {
          font-weight: 300;
        }
        input[type=text] {
          border: none;
          color: ${props => props.theme["gray-600"]};
          background: ${props => props.theme.white};
          padding: 0.3rem 1rem;
          border-radius: 4px;
          width: 20rem;
          font-size: 1rem;
          font-family: 'Roboto', sans-serif;
          font-weight: 300;
          &::placeholder {
            color: ${props => props.theme["gray-500"]};
            background: ${props => props.theme.white};
            font-weight: 300;
          }
        }
        input[type=date] {
          font-family: 'Roboto', sans-serif;
          font-weight: 300;
          font-size: 1rem;
          border: none;
          background: ${props => props.theme.white};
          color: ${props => props.theme["gray-600"]};
          padding: 0.16rem;
          border-radius: 4px;
        }
        select, input[type=date], input[type=text] {
          border: 1px solid ${props => props.theme["gray-500"]};
        }
      }
    }
    .scheduleCard {
      background-color: ${props => props.theme.white};
      box-shadow: 0 0 15px ${props => props.theme["gray-300"]};
      padding: 1rem 2rem;
      border-radius: 4px;
      display: flex;
      flex-direction: row;
      justify-content: space-between;
      align-items: center;
    }
  }
`