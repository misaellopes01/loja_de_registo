import styled from "styled-components";

export const SettingsContainer = styled.section`
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
    width: 100%;
    height: 100%;
    display: flex;
    padding: 1rem 3rem;
    flex-direction: column;
    gap: 2rem;
  
  }
`