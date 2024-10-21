import GlobalStyles from "./globals/GlobalStyles";
import Header from "./Components/Header";
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from "./Pages/Home";
import Login from "./Pages/Auth/Login";
import Register from "./Pages/Auth/Register";
import { ChakraProvider } from '@chakra-ui/react'
import theme from "./globals/theme";


function App() {

    return (
        <>
            <BrowserRouter>
                <ChakraProvider theme={theme}>

                    <GlobalStyles />
                    <Header />
                    <Routes>
                        <Route path="/" element={<Home />} />
                        <Route path="/acesso" element={<Login />} />
                        <Route path="/criar" element={<Register />} />

                    </Routes>

                </ChakraProvider>

            </BrowserRouter>

        </>
    )
}

export default App;
