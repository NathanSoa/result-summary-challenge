import { createGlobalStyle } from "styled-components";

export const GlobalTheme = createGlobalStyle`
    @font-face {
        font-family: 'Hanken Grotesk';
        font-weight: 500;
        src: url('src/assets/fonts/static/HankenGrotesk-Bold.ttf') format('opentype');
    }

    @font-face {
        font-family: 'Hanken Grotesk';
        font-weight: 600;
        src: url('src/assets/fonts/static/HankenGrotesk-ExtraBold.ttf') format('opentype');
    }

    @font-face {
        font-family: 'Hanken Grotesk';
        font-weight: 300;
        src: url('src/assets/fonts/static/HankenGrotesk-Medium.ttf') format('opentype');
    }

    :root{
        --bs-body-line-height: normal;
    }

    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    body{
        background: ${({ theme }) => theme['white']};
        font-size: 18px;
    }

    body, input, textarea, button{
        font-size: 1rem;
    }

    /* Works on Chrome, Edge, and Safari */
    *::-webkit-scrollbar {
        width: 11px;
    }

    *::-webkit-scrollbar-track {
        background: #DBDBDB;
    }

    *::-webkit-scrollbar-thumb {
        background: #AFAFAF;
        border-radius: 10px;
    }
`