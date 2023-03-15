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

    form {
      margin: 0 auto;
      width: 40rem;
      height: 32.25rem;
      background: #f0f0f0;
      border-radius: 8px;

      main {
        height: 23.125rem;
        padding: 2.5rem;
        display: flex;
        flex-direction: column;
        gap: 1rem;

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

      footer {
        border-top: 0.75rem solid #fff;
      }
    }
  }
`