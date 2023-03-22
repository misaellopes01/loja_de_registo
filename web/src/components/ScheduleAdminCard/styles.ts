import styled from "styled-components";

export const ScheduleAdminCardContainer = styled.div`
      background-color: ${props => props.theme.white};
      box-shadow: 0 0 15px ${props => props.theme["gray-300"]};
      padding: 1rem 2rem;
      border-radius: 4px;
      display: flex;
      flex-direction: row;
      justify-content: space-between;
      align-items: center;
      cursor: pointer;

      button {
        border: none;
        padding: 0.5rem 1rem;
        background-color: ${props => props.theme["green-card"]};
        cursor: pointer;
        color: ${props => props.theme.white};
        text-transform: uppercase;
        border-radius: 4px;
      }
      span {
        font-weight: 300;
        &:nth-child(4) {
          display: flex;
          flex-direction: column;
          gap: 0.3rem;
          font-weight: 400;
        }
      }
      em {
        font-style: normal;
        border-top: 1px solid ${props => props.theme["gray-500"]};
        padding-top: 0.3rem;
        font-weight: 300;
      }
      
`