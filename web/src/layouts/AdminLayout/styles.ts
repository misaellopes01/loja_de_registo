import styled from "styled-components";

export const AdminContainer = styled.div`
    min-height: 100vh;
    height: 100%;
    margin: 0 auto;
    border-radius: 8px;
    display: flex;
    flex-direction: column;

    header {
        position: fixed;
        width: 100vw;
        display: flex;
        align-items: center;
        justify-content: space-between;
        padding: 0.5rem 2rem;
        background-color: ${props => props.theme.red};

        > img {
            width: 100px;
        }
        nav {
            display: flex;
            align-items: center;
            justify-content: center;
            gap: 1.5rem;
            
            span {
                font-family: 'Baloo 2', sans-serif;
                color: ${props => props.theme.yellow};
                font-weight: 800;
            }

            > img {
                height: 45px;
                width: 45px;
                border-radius: 50%;
                background: ${props => props.theme["gray-100"]};
                border: 3px solid ${props => props.theme["gray-500"]};
            }
            button {
                background: transparent;
                border: none;
                outline-style: none;
                display: flex;
                align-items: center;
                text-decoration: none;
                color: ${props => props.theme["gray-100"]};
                font-family: 'Baloo 2', sans-serif;
                gap: .5rem;
                cursor: pointer;
            }
        }
    }
    > section {
        width: 100%;
        min-height: 100vh;
        height: 100%;
        display: flex;
        flex-direction: row;
        margin-top: 3rem;

        > nav {
            background: ${props => props.theme["gray-700"]};
            width: 12rem;
            display: flex;
            flex-direction: column;
            padding: 2rem 1rem;
            gap: 1rem;
            .setting {
                position: absolute;
                bottom: 1rem;
            }
            
            a {
                display: flex;
                justify-content: flex-start;
                align-items: center;
                gap: 0.5rem;
                text-decoration: none;
                color: ${props => props.theme["gray-100"]};
                font-weight: 300;
                text-transform: uppercase;
                font-family: 'Roboto', sans-serif;
                font-size: 1rem;
                padding-bottom: .5rem;
                border-bottom: 1px solid ${props => props.theme["gray-100"]};
                transition: color .2s, border-color .2s;
                &:active, &:hover {
                    color: ${props => props.theme.yellow};
                    border-color: ${props => props.theme.yellow};
                }
            }
        }
    }
    footer {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        background: ${props => props.theme["gray-800"]};
        height: 6rem;
        color: ${props => props.theme["gray-400"]};
    }
`