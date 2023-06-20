import styled from "styled-components";

export const ResultContainer = styled.main`
  width: 100%;
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  height: 100%;
  h1 {
    padding: 4rem;
    text-align: center;
    font-family: 'Baloo 2', sans-serif;
    font-weight: 800;
    font-size: 2.5rem;
    color: ${props => props.theme["gray-800"]};
  }

  .colors {
    max-width: 70rem;
    margin: 0 auto;
    display: flex;
    background: ${props => props.theme["gray-100"]};
    padding: .75rem 1.25rem;
    margin-bottom: 2rem;
    border-radius: 6px;
    }

  section {
    max-width: 70rem;
    margin: 0 auto;
    height: 100%;
    display: flex;
    flex-direction: column;
    padding-bottom: 2rem;
    gap: 2rem;
  }
  @media screen and (max-width: 800px) {
      .colors {
        padding: 0 1rem;
        max-width: 90%;
        width: 90%;
        padding: .75rem 0;
      }
    }
`
  const STATUS_COLOR = {
    blue: 'blue',
    green: 'green-card',
    red: 'red'
  } as const

  interface StatusProps {
    statusColor: keyof typeof STATUS_COLOR
  }


  export const Span = styled.span<StatusProps>`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: row-reverse;
    font-size: 1.1rem;
    &::after {  
      content: '';
      width: 30px;
      height: 30px;
      background: ${props => props.theme[STATUS_COLOR[props.statusColor]]};
      margin-left: 1rem;
      margin-right: .5rem;
      border-radius: 50%;
    }
    @media screen and (max-width: 800px) {
      font-size: .875rem;
    }    
`