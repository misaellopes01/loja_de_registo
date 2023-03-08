import styled from "styled-components";

export const LayoutContainer = styled.div`
    max-width: 70rem;
    min-height: 100vh;
    height: 100%;
    /* height: calc(100vh - 10rem); */
    margin: 0 auto;

    background: ${(props) => props.theme['background']};
    border-radius: 8px;

    display: flex;
    flex-direction: column;
`