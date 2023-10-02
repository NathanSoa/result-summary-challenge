import styled from "styled-components";

export const ScoreContainer = styled.article`
    padding: 2rem;
    margin-right: 2rem;
    border-radius: 1rem;
    max-height: inherit;
    height: 100%;

    background: linear-gradient(0deg, ${({ theme }) => theme['persian-blue-gradient']} 0%, ${({ theme }) => theme['light-royal-blue-gradient']} 11%, ${({ theme }) => theme['light-slate-blue-gradient']} 100%);

    h1 {
        text-align: center;
        color: ${({ theme }) => theme['light-lavender']};
    }

    @media (max-width: 540px) {
        margin-right: 0;
        border-radius: 0;
        border-bottom-left-radius: 2rem;
        border-bottom-right-radius: 2rem;
    }
`

export const ScoreCircle = styled.div`
    color: ${({ theme }) => theme['light-lavender']};
    font-weight: 600;
    font-size: 0.8rem;

    margin: 0 auto;
    margin-top: 2rem;
    width: 200px;
    height: 200px;
    border-radius: 50%;
    background: linear-gradient(0deg, ${({ theme }) => theme['light-royal-blue-gradient']} 0%, ${({ theme }) => theme['persian-blue-gradient']} 20%, ${({ theme }) => theme['violet-blue-gradient']} 100%);

    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;

    .main-number {
        font-size: 4rem;
        color: ${({ theme }) => theme['white']};
    }
`

export const ScoreDescription = styled.div`
    color: ${({ theme }) => theme['white']};

    margin-top: 2rem;
    margin-bottom: 1rem;
    gap: 1rem;

    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
`