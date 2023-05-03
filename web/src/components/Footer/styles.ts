import styled from "styled-components";


export const FooterContainer = styled.footer`
    background: ${props => props.theme["gray-700"]};
    color: ${props => props.theme["gray-300"]};
    font-family: 'Roboto', sans-serif;
    font-weight: 300;
    width: 100%;
    height: 250px;
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    padding: 0 2rem;
    padding-bottom: 2rem;
    margin: 0 auto;
    text-align: center;
    
    section {
      width: 100%;
      max-width: 70rem;
      margin: 0 auto;
      display: flex;
      align-items: center;
      justify-content: center;
      flex-direction: column;
      line-height: 1.5;
      
      div {
        display: flex;
        align-items: center;
        span {
          font-family: 'Roboto', sans-serif;
          font-weight: 300;
        }
      }
    }

    
`