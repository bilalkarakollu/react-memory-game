import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
    * {
        box-sizing: border-box;
    }

    body {
        margin: 0;
        padding: 0;
        font-family: 'Roboto', sans-serif;
        font-size: 1.15rem;
        line-height: 1.5;
        color: #333;
        background-color: #fff;
    }
    `;