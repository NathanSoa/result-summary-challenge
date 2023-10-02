import styled from "styled-components";

interface ReactionProps {
    color:  'red' | 'green' | 'orange' | 'cobalt',
}

export const ReactionWrapper = styled.div<ReactionProps>`
    color: ${({ theme, color }) => theme[color]};
    background-color: ${({ theme, color }) => theme[`light-${color}`]};
    font-weight: 600;

    padding: 0.75rem;

    display: flex;
    flex-flow: row;
    justify-content: space-between;
    align-items: center;

    margin-bottom: 1.25rem;
    border-radius: 8px;

    .score {
        color: ${({ theme }) => theme['light-gray-blue']};
    }

    .actual-score {
        color: ${({ theme }) => theme['dark-gray-blue']};
    }
`
