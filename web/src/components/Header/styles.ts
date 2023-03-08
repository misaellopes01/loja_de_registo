import styled from "styled-components";

export const HeaderContainer = styled.header`
    display: flex;
    align-items: center;
    justify-content: space-between;
    /* height: 5.75rem; */
    
    padding: 0 2rem;
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
                padding: 0.25rem .75rem;
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
`