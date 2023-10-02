import styled from "styled-components";

export const MainWrapper = styled.div`
    margin: 0 auto;
    margin-top: 10%;
    width: 100%;
    max-width: 650px;
    border-radius: 1rem;

    display: flex;
    flex-flow: row;
    justify-content: center;

    font-weight: 300;
    font-family: 'Hanken Grotesk', sans-serif;
    background: ${({ theme }) => theme['white']};
    box-shadow: 15px 15px 50px rgba(0, 0, 0, 0.2);

    @media (max-width: 540px) {
        flex-flow: column;
        margin-top: 0;
    }
`