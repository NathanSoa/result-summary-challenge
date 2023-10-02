import styled from "styled-components";

export const StyledButton = styled.button`
    margin-top: 1rem;
    padding: 0.9rem;
    border: 0;
    border-radius: 32px;
    width: 100%;

    color: ${({ theme }) => theme['white']};
    background: ${({ theme }) => theme['dark-gray-blue']};

    &:hover {
        cursor: pointer;
        background: ${({ theme }) => theme['light-royal-blue-gradient']};
        transition: 0.2s;
    }
`