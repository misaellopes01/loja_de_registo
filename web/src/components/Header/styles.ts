import styled from "styled-components";

export const HeaderContainer = styled.header`
    display: flex;
    align-items: center;
    justify-content: space-between;
    button {
        display: none;
    }
    padding: 0.5rem 2rem;
    background-color: ${props => props.theme.red};

    img {
        width: 100px;
    }

    nav {
        display: flex;
        align-items: center;
        justify-content: center;
        gap: 1.5rem;

        a {
            font-size: 1.2rem;
            text-decoration: none;
            outline-style: none;
            color: ${props => props.theme.white};
            font-style: 'Baloo 2', cursive;
            font-weight: 500;
            transition: border .3s, color .25s;
            &:hover {
                color: ${props => props.theme.yellow};
                border-bottom: 1px solid ${props => props.theme.yellow};
                border-bottom-left-radius: 6px;
                border-bottom-right-radius: 6px;
            }

            &:nth-child(3) {
                color: ${props => props.theme["gray-900"]};
                background: ${props => props.theme.yellow};
                display: flex;
                align-items: center;
                justify-content: center;
                padding: 0.5rem 1rem;
                border-radius: 6px;
                font-weight: 700;
                gap: 0.25rem;
                transition: background-color .25s, color .25s;

                &:hover {
                    background: ${props => props.theme["gray-900"]};
                    color: ${props => props.theme.yellow};
                    border: none;
                }
            }
       
        }
    }

    @media screen and (max-width: 490px){
        img {
            display: inline-block;
        }
        nav {
            display: none;
        }
        button {
            display: flex;
            padding: .5rem;
            outline-style: none;
            border-style: none;
            background: ${props => props.theme.yellow};
            border-radius: 8px;
        }
        .toggle {
            position: absolute;
            left: 0;
            top: 0;
            height: 100vh;
            width: 70%;
            background: ${props => props.theme.red};
            opacity: .95;
            display: flex;
            flex-direction: column;
            padding: 4rem 2rem;
            gap: 1.5rem;

            a {
                font-size: 1.2rem;
                text-decoration: none;
                outline-style: none;
                color: ${props => props.theme.white};
                font-style: 'Baloo 2', cursive;
                font-weight: 500;
                transition: border .3s, color .25s;
                &:hover {
                    color: ${props => props.theme.yellow};
                    border-bottom: 1px solid ${props => props.theme.yellow};
                    border-bottom-left-radius: 6px;
                    border-bottom-right-radius: 6px;
                }

                &:nth-child(3) {
                    color: ${props => props.theme["gray-900"]};
                    background: ${props => props.theme.yellow};
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    padding: 0.5rem;
                    border-radius: 6px;
                    font-weight: 700;
                    gap: 0.25rem;
                    transition: background-color .25s, color .25s;

                    &:hover {
                        background: ${props => props.theme["gray-900"]};
                        color: ${props => props.theme.yellow};
                        border: none;
                    }
                }
        
            }
        }
 
    }
`