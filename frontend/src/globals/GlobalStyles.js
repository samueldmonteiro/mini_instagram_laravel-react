// GlobalStyles.js
import { createGlobalStyle } from 'styled-components';
import styled from 'styled-components';


export const colors = {
    primary: '#3F51B5', // Definir cor principal (azul)
    secondary: '#FFEB3B', // Definir cor secundária (verde)
    danger: '#e74c3c', // Definir cor de perigo (vermelho)
    // Adicione mais cores conforme necessário
}

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
    }
`;


export const Container = styled.section`
    max-width: 900px;
    margin: 10px auto 40px auto;
    padding: 0px 10px;
    color: #212121;

    @media (max-width: 912px) {
        padding: 0px 30px;
    }
    
    @media (max-width: 450px) {
        padding: 0px 25px;
    }
`

export const TitleOne = styled.h1`
    font-size: 1.5em;
    text-align: ${(props) => props.position || 'left'};
    margin: 25px 0px;
`

export default GlobalStyles;


