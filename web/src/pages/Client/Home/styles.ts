import styled from "styled-components";


export const HomeContainer = styled.main`
    margin: 0 auto;
    width: 100%;
    height: 100%;
    border-radius: 6px;
    display: flex;
    flex-direction: column;
    align-items: center;

    .banner {
        background-color: ${props => props.theme.background};
        max-width: 70rem;
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
                line-height: 1.5;
                font-weight: 800;
                font-size: 2.5rem;
               
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
                    align-items: center;
                    gap: 0.3rem;
                    span {
                        background-color: crimson;
                        width: 25px;
                        height: 25px;
                        display: flex;
                        align-items: center;
                        justify-content: center;
                        border-radius: 50%;
                    }
                    &:nth-child(2) {
                       span {
                            background: ${props => props.theme["gray-800"]};
                       }     
                    }
                    &:nth-child(3) {
                       span {
                            background: ${props => props.theme["yellow-dark"]};
                       }     
                    }
                    &:nth-child(4) {
                       span {
                            background: ${props => props.theme.purple};
                       }     
                    }
                }
            }
        }

        img {
            width: 40%;
        }
    }
    .about {
        width: 100%;
        height: 100%;
        background: rgba(255, 220, 0, .5);
        display: flex;
        .content {
            margin: 0 auto;
            max-width: 70rem;
            height: 100%;
            padding-top: 3rem;

            .upper {
                h3 {
                    font-size: 2.5rem;
                    width: 100%;
                    text-align: right;
                    color: ${props => props.theme["gray-900"]};
                    font-family: 'Baloo 2', sans-serif;
                    line-height: 1.4;
                }

                > div {
                    color: ${props => props.theme["gray-600"]};
                    display: flex;
                    flex-direction: row;
                    img {
                        width: 40%;
                    }
                    > div {
                        padding: 2rem 4rem 0 4rem;
                        
                        strong{
                            line-height: 1.5;
                            font-size: 1.1rem;
                        }
                        p {
                            padding-left: 3rem;
                            padding-top: 1rem;
                            line-height: 1.5;
                            font-size: 1rem;
                        }
                    }
                }
            }

            .down {
                padding-top: 2rem;

                > div {
                    color: ${props => props.theme["gray-600"]};
                    > strong {
                        line-height: 1.5;
                        font-size: 1.1rem;
                    }

                    ul {
                        line-height: 1.3;
                        list-style: none;
                        padding-top: 1rem;
                        padding-left: 1rem;
                    }
                }
                .footer {
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    padding: 2.5rem 0;

                    img {
                        width: 10%;
                    }
                } 
               
            }

            
        }
       
    }
    .taxes {
        max-width: 70rem;
        height: 100%;
        h3 {
            font-size: 2.5rem;
            width: 100%;
            text-align: center;
            color: ${props => props.theme["gray-900"]};
            font-family: 'Baloo 2', sans-serif;
            line-height: 1.4;
            padding: 3rem 0;
        }
        div {
            display: flex;
            flex-direction: row-reverse;
            gap: 14rem;
            align-items: center;

            p {
                color: ${props => props.theme["gray-600"]};
                font-size: 1.2rem;
                font-weight: bold;
                line-height: 1.4;
            }
        }
    }

    @media (max-width: 800px) {
        justify-content: center;
        .banner {
            margin-top: 2rem;
            padding-top: 3rem;
            justify-content: center;
            align-items: center;

            img {
                display: none;
            }
            .content {
                padding: 0 1.5rem;
                flex-direction: column;
                align-items: center;

                h1, p {
                    text-align: center;
                    padding: 0;
                }
                h1{
                    font-size: 1.6rem;
                }
                ul {
                    display: flex;
                    flex-direction: column;
                }
            }
        }
    } 
`