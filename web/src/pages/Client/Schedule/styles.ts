import styled from "styled-components";

export const ScheduleContainer = styled.main`
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
    .exceedLimit {
      margin: 0 auto;
      text-align: center;
      line-height: 2;
      font-size: 1.2rem;
    }

    form {
      margin: 0 auto;
      width: 40rem;
      height: 32.25rem;
      background: #f0f0f0;
      border-radius: 8px;
      display: flex;
      flex-direction: column;

    main {
        height: 24rem;
        padding: 2.5rem;
        display: flex;
        flex-direction: column;
        gap: 1.5rem;

        strong, span {
          line-height: .5;
        }
        span {
          margin-bottom: 1rem;
          font-size: 0.875rem;
        }
        .option {
          padding: 0.5rem;
          display: flex;
          align-items: center;
          gap: 0.5rem;
          background: ${props => props.theme["gray-100"]};
          width: 16.4375rem;
          border-radius: 6px;
          input[type=range]{
            -webkit-appearance: none;
            width: 40px;
            height: 20px;
            padding: 0 .15rem;
            border-radius: 50px;
            background: ${props => props.theme["gray-100"]};
            border: 1px solid #C5B319;
            transition: .35s ease-in-out;
          }
          input[type=range]::-webkit-slider-thumb{
            -webkit-appearance: none;
            width: 16px;
            height: 16px;
            border-radius: 50px;
            background: #C5B319;
            transition: .25s ease-in-out;
          }
          input[type=range]::-moz-range-thumb{
            -webkit-appearance: none;
            width: 16px;
            height: 16px;
            border-radius: 50px;
            background: #C5B319;
            transition: .25s ease-in-out;
            border: none;
          }
          label {
            font-size: 0.875rem;
          }
      }
      .bi {
        display: flex;
        align-items: center;
        span {
          text-transform: uppercase;
          padding-top: 1rem;
          font-size: 0.75rem;
        }
      }
      input {
        border: none;
        background: ${props => props.theme["gray-100"]};
        padding: 0.65625rem 1.3125rem;
        &:disabled {
          background: ${props => props.theme["gray-300"]};
        }
      }
      select {
        border: none;
        background: ${props => props.theme["gray-100"]};
        padding: 0.59rem 1.3rem;
        font-family: 'Roboto', sans-serif;
        &:disabled {
          background: ${props => props.theme["gray-300"]};
        }
      }
      #bi {
        width: 12.5rem;
      }
      > div {
        display: flex;
        gap: 0.5rem;

        input {
          width: 12.5rem;
        }
        select {
          width: 100%;
        }
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

      a {
        background: ${props => props.theme["gray-100"]};
        color: ${props => props.theme["gray-600"]};
        padding: 1.2rem 6.5rem;
        border-radius: 4px;
        text-decoration: none;
        text-transform: uppercase;
        font-size: 0.875rem;
      }
      button {
        background: ${props => props.theme.green};
        padding: 1.2rem 7rem;
        border-style: none;
        border-radius: 4px;
        font-size: 0.875rem;
        text-transform: uppercase;
        font-weight: 700;
        color: ${props => props.theme["gray-600"]};
        cursor: pointer;

        &:disabled {
          background: ${props => props.theme["gray-600"]};
          color: ${props => props.theme["gray-500"]};
          cursor: not-allowed;
        }
      }
    }
  }

  @media screen and (max-width: 800px) {
    form {
      width: 90%;
     
      main {
        display: inline-flex;
        height: 23.125rem;
        padding: 2rem;
        gap: 1rem;

        .last {
          flex-direction: column;
          gap: 1rem;
        }
      }

      footer {
        flex-direction: column;
        a {
          padding: 1rem 6rem;
          border-radius: 4px;
          text-decoration: none;
          text-transform: uppercase;
          font-size: 0.875rem;
        }
        button {
          padding: 1rem 6.7rem;
        }
      }
    }
  }
`