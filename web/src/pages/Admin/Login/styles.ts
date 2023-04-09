import styled from "styled-components";


export const LoginContainer = styled.main`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 500px;
    height: 100vh;
    margin: 0 auto;

    .logo-container {
      text-align: center;
      width: 100%;

      img {
        width: 100px;
      }
    }

    .login-form {
      width: 80%;
      padding: 2rem;
      background-color: #f0f0f0;
      border-radius: 8px;
      box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
      display: flex;
      flex-direction: column;
      gap: 1rem;

      h2 {
        text-align: center;
        width: 100%;
      }
    }

    input {
      width: 100%;
      padding: 0.5rem;
      margin-bottom: 1rem;
      border: none;
      border-radius: 4px;
    }

    button {
      width: 100%;
      padding: 0.5rem;
      background-color: #007bff;
      color: #fff;
      font-weight: bold;
      border: none;
      border-radius: 4px;
      cursor: pointer;
    }

    button:hover {
      background-color: #0056b3;
    }
`