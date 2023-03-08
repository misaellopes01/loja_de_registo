import styled from "styled-components";


export const HomeContainer = styled.main`
    margin: 0 auto;
    max-width: 70rem;
    height: 100%;
    max-height: 34.375rem;
    background-color: ${props => props.theme.background};
    padding: 1rem;
    border-radius: 6px;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 0 2rem;

    .banner {
        height: 100%;
        padding-top: 2rem;
        display: flex;
        justify-content: space-between;
        align-items: flex-end;

        .content {
            height: 100%;
            padding-bottom: 4rem;
            display: flex;
            flex-direction: column;
            align-items: flex-start;
            h1 {
                font-family: 'Baloo 2', sans-serif;
                color: #272221;
                line-height: 1.3;
                font-weight: 800;
                font-size: 2rem;
               
            }

            p {
                font-size: 1rem;
                padding-right: 2rem;
                line-height: 1.5;
                margin-top: 1rem;
            }

            ul {
                padding-top: 2.5rem;
                list-style: none;
                display: grid;
                grid-template-columns: 1fr 1fr;
                gap: 1rem; 

                li {
                    display: flex;
                    justify-content: flex-start;
                    gap: 0.3rem;
                    span {
                        background-color: crimson;
                        width: 20px;
                        height: 20px;
                        display: flex;
                        align-items: center;
                        justify-content: center;
                        border-radius: 50%;
                    }
                }
            }
        }

        img {
            width: 40%;
        }
    }
    
`