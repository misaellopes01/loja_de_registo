import styled from "styled-components";

export const SettingsContainer = styled.section`
  width: 100%;
  height: 100%;
  padding: 1rem 3rem;
  background-color: ${props => props.theme["gray-100"]};
  display: flex;
  gap: 1rem;
  flex-direction: column;
  h1 {
    text-align: center;
    text-transform: uppercase;
    font-size: 2rem;
    line-height: 2;
    font-family: 'Baloo 2', sans-serif;
  }
  h2 {
    text-transform: uppercase;
    font-size: 1.5rem;
    font-family: 'Baloo 2', sans-serif;
    color: ${props => props.theme["yellow-dark"]};
    border-bottom: 1px solid ${props => props.theme["yellow-dark"]};
  }

  section {
    width: 100%;
    height: 100%;
    display: flex;
    padding: 1rem 2rem;
    flex-direction: column;
    gap: 1rem;
    border-radius: 6px;

    background-color: ${props => props.theme["gray-100"]};
    box-shadow: 0 0 15px ${props => props.theme["gray-300"]};
  }
  .profileCard {
    .card {
      display: grid;
      grid-template-columns:repeat(3, 1fr);
      justify-items: center;
      column-gap: 3rem;

      > div {
        display: flex;
        flex-direction: column;
        gap: 1rem;

        button {
          border: none;
          padding: 0.5rem 1rem;
          background-color: ${props => props.theme["base-title"]};
          color: ${props => props.theme.white};
          border-radius: 6px;
          cursor: pointer;
          transition: background-color .2s;

          &:hover {
            background-color: ${props => props.theme["green-card"]};
          }
        }
      }
      .profilePic {
        width: 100%; 
        display: flex;
        justify-content: flex-end;
        input[type=file] {
          padding: 0.5rem 1rem;
          border: none;
          text-align: center;
        }
        img {
          width: 150px;
          border-radius: 100%;
          border: 5px solid ${props => props.theme.white};
          box-shadow: 0 0 10px ${props => props.theme["gray-500"]};
        }
      }
      .profileInfo, .profilePassword {
        width: 100%; 
        display: flex;
        justify-content: flex-end;
        input {
          width: 100%; 
          border-style: none;
          padding: 0.5rem 1rem;
          border-radius: 6px;
        }
        span {
          padding: 0 1rem;
          text-transform: uppercase;
          font-size: 0.875rem;
        }
      }
    }
  }
  .newUserCard {
    .userCard {
      display: grid;
      grid-template-columns: 1fr 2fr;
      justify-items: center;
      column-gap: 3rem;

      > div {
        display: flex;
        flex-direction: column;
        gap: 1rem;

        button {
          border: none;
          padding: 0.5rem 1rem;
          background-color: ${props => props.theme["base-title"]};
          color: ${props => props.theme.white};
          border-radius: 6px;
          cursor: pointer;
          transition: background-color .2s;

          &:hover {
            background-color: ${props => props.theme["green-card"]};
          }
        }
      }
      .newUserInfo, .listOfUsers {
        width: 100%; 
        display: flex;
        justify-content: flex-end;
        input {
          width: 100%; 
          border-style: none;
          padding: 0.5rem 1rem;
          border-radius: 6px;
        }
        span {
          padding: 0 1rem;
          text-transform: uppercase;
          font-size: 0.875rem;
        }
      }
      .listOfUsers {
        border-left: 1px solid ${props => props.theme["yellow-dark"]};
        padding-left: 1rem;
        flex-direction: column; 
        justify-content: flex-start;

        h3 {
          text-transform: uppercase;
          font-size: 1.2rem;
          font-family: 'Baloo 2', sans-serif;
          text-align: center;
        }
        
        > div {
          color: ${props => props.theme["gray-900"]};
          padding: 0.3rem;
          border-radius: 8px;
          background-color: ${props => props.theme.white};
          display: flex;
          gap: 0.5rem;

          input {
            background-color: ${props => props.theme["gray-100"]}
          }

          button {
            &:hover {
            background-color: ${props => props.theme.red};
          }
          }
        }
      }
    }
  }
`