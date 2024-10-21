// theme.js
import { extendTheme } from '@chakra-ui/react';

const theme = extendTheme({

    colors: {
        primary: '#3F51B5', // Definir cor principal (azul)
        secondary: '#FFEB3B', // Definir cor secundária (verde)
        danger: '#e74c3c', // Definir cor de perigo (vermelho)
        // Adicione mais cores conforme necessário
    },

    components: {
        Button: {
            variants: {
                default: {
                    bg: 'primary',
                    color: 'white',
                    _hover: { bg: 'blue.600' },
                },
                secondary: {
                    bg: 'gray.500',
                    color: 'white',
                    _hover: { bg: 'gray.600' },
                },
            },
            defaultProps: {
                variant: 'default', // Define o estilo padrão
            },
        },
    },

    Input: {
        baseStyle: {
            field: {
                _hover: {
                    borderColor: 'primary', // Cor ao passar o mouse sobre o input
                },
                _focus: {
                    borderColor: 'primary', // Cor ao focar no input
                    boxShadow: '0 0 0 1px #3498db', // Sombra ao focar no input
                },
            },
        },
    },
});

export default theme;
