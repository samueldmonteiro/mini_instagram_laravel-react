// GlobalStyles.js
import { createGlobalStyle } from 'styled-components';
import styled from 'styled-components';

const GlobalStyles = createGlobalStyle`

    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    body {
        font-family: "Poppins", serif !important;
        background-color: #f9f9f9;
        color: #333;
    }

    h1, h2, h3, h4, h5, h6 {
        margin: 0;
        padding: 0;
        font-weight: bold;
    }

    a {
        color: #3498db;
        text-decoration: none !important;
    }

    li {
        list-style: none;
    }

    button {
        font-family: inherit;
        cursor: pointer;
    }

    h2 {
        color:white;
        background-color:#FFEB3B;
    }
`;


export const Container = styled.section`
    max-width: 900px;
    margin: 10px auto 40px auto;
    padding: 0px 10px;
    color: #212121;

    @media (max-width: 400px) {
        padding: 0px 20px;
    }
`

export default GlobalStyles;


