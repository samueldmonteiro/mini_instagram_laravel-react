import GlobalStyles from "./globals/GlobalStyles";
import Header from "./Components/Header";
import { BrowserRouter, Route, Routes, NavLink } from 'react-router-dom';
import Home from "./Pages/Home";
import Login from "./Pages/Login";
import { ChakraProvider } from '@chakra-ui/react'

function App() {

    return (
        <>
            <BrowserRouter>
                <ChakraProvider>

                    <GlobalStyles />
                    <Header />
                    <Routes>
                        <Route path="/" element={<Home />} />
                        <Route path="/acesso" element={<Login />} />
                    </Routes>

                </ChakraProvider>

            </BrowserRouter>

        </>
    )
}

export default App;
