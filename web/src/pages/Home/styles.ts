import styled from "styled-components";


export const HomeContainer = styled.main`
    width: 100%;
    min-height: 100vh;
    height: 100%;
    background-color: #ddd;
    padding: 1rem;
    border-radius: 6px;
    display: flex;
    flex-direction: column;
    gap: 1rem;
    

    .banner{
        display: flex;
        align-items: flex-start;
        justify-content: flex-start;
        flex-direction: column;
        background-color: #f0f0f0;
        padding: 1rem;
        height: 100%;
        border-radius: 6px;
        
        .info {
            border-bottom: 1px solid #121214;
            width: 100%;
            display: flex;
            justify-content: flex-start;
            align-items: flex-start;
            padding-bottom: 1rem;

            .profile {
                width: 65%;
                height: 100%;
                display: flex;
                align-items: center;
                justify-content: flex-start;
                flex-direction: row;
                gap: 1rem;

                img {
                    width: 200px;
                    height: 200px;
                    border-radius: 50%;
                    border: 3px solid #121214;
                }

                .content {
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    gap: 1rem;
                    flex-direction: column;
                }
            }
            .address {
                padding-top: 1rem;
                width: 35%;
                height: 100%;
                display: flex;
                justify-content: center;
                align-items: flex-start;
                gap: 1rem;
                flex-direction: column;
            }
        
        }
    }
    .details {
        padding-top: 1rem;
        padding-left: 1rem;
        display: flex;
        flex-direction: column;
        gap: 1rem;
        strong {
            text-transform: uppercase;
        }
    }
`