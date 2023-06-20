import styled from "styled-components";


export const ConsultContainer = styled.main`
    width: 100%;
    display: flex;
    flex-direction: column;
    padding-bottom: 10rem;
    h1 {
      padding: 4rem;
      text-align: center;
      font-family: 'Baloo 2', sans-serif;
      font-weight: 800;
      font-size: 2.5rem;
      color: ${props => props.theme["gray-800"]};
    }

    form {
      margin: 0 auto;
      width: 40rem;
      height: 15.8125rem;
      background: #f0f0f0;
      border-radius: 8px;
      display: flex;
      flex-direction: column;

    main {
        height: 10.9375rem;
        padding: 2.5rem;
        display: flex;
        flex-direction: column;
        gap: 1.5rem;

        strong {
          line-height: .5;
        }
      input {
        border: none;
        background: ${props => props.theme["gray-100"]};
        padding: 0.65625rem 1.3125rem;
      }
      span{
        margin-top: -1rem;
        padding-left: 1rem;
        text-transform: uppercase;
        font-size: .75rem;
      }
    }
    footer {
      width: 100%;
      height: 100%;
      display: flex;
      align-items: center;
      justify-content: center;
      gap: 1rem;
      border-top: 1rem solid #fff;
      button {
        text-decoration: none;
        background: ${props => props.theme.green};
        padding: 0.8rem 6rem;
        border-style: none;
        border-radius: 4px;
        font-size: 0.875rem;
        text-transform: uppercase;
        font-weight: 700;
        color: ${props => props.theme["gray-600"]};
        cursor: pointer;

        &:disabled {
          cursor: not-allowed;
          background: ${props => props.theme["gray-500"]};
        }
      }
    }
    }

    @media screen and (max-width: 800px) {
      form {
        width: 90%;

        main {
          strong {
           line-height: 1;
          }
        }
      }
    }
`