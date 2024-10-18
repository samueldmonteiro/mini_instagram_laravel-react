import { Box, Flex, HStack, IconButton, useDisclosure, Stack } from '@chakra-ui/react';
import { HamburgerIcon, CloseIcon } from '@chakra-ui/icons';
import { Menu, MenuButton, MenuList, MenuItem, } from '@chakra-ui/react'
import { Avatar, AvatarBadge } from '@chakra-ui/react'
import { motion } from 'framer-motion';
import { FiUser } from "react-icons/fi";
import { NavLink } from 'react-router-dom';
import { Container } from '../../globals/GlobalStyles';
import LogoUrl from '../../assets/images/logo.png'
import userImage from '../../assets/images/user.jpg'
import { HeaderContainer, LoginLink, Logo, MenuMobileButton } from './styles';


const Header = () => {
    const { isOpen, onOpen, onClose } = useDisclosure();

    const logged = false;

    console.log('header')

    return (
        <HeaderContainer>
            <Container>
                <Box>
                    <Flex alignItems="center" justifyContent="space-between">
                        <NavLink to="/">
                            <Logo src={LogoUrl} />
                        </NavLink>

                        <HStack as="nav" spacing={8} display={{ base: 'none', md: 'flex' }}>
                            <NavLink to="/">Home</NavLink>
                            <NavLink to="/sobre">Sobre o Projeto</NavLink>

                            {!logged ?
                                <NavLink to="/acesso">
                                    <LoginLink>
                                        Acesso / Criar
                                        <FiUser size='22' color='#212121' />
                                    </LoginLink>
                                </NavLink> :

                                <Menu>
                                    <MenuButton >
                                        <Stack direction='row' spacing={4}>
                                            <Avatar size='md'
                                                src={userImage}>
                                                <AvatarBadge boxSize='1.25em' bg='green.500' />
                                            </Avatar>

                                        </Stack>
                                    </MenuButton>
                                    <MenuList>
                                        <NavLink to="/perfil"> <MenuItem>Meu Perfil
                                        </MenuItem></NavLink>

                                        <NavLink to="/publicar"> <MenuItem>Publicar
                                        </MenuItem></NavLink>

                                        <NavLink to="/sair"> <MenuItem>Sair
                                        </MenuItem></NavLink>
                                    </MenuList>
                                </Menu>
                            }

                        </HStack>

                        {!logged && <IconButton
                            size="md"
                            icon={isOpen ? <CloseIcon /> : <HamburgerIcon />}
                            aria-label="Open Menu"
                            display={{ md: 'none' }}
                            onClick={isOpen ? onClose : onOpen}
                        />}

                        {logged && <MenuMobileButton>
                            <Menu>
                                <MenuButton >
                                    <Stack direction='row' spacing={4}>
                                        <Avatar size='md'
                                            src={userImage}>
                                            <AvatarBadge boxSize='1.25em' bg='green.500' />
                                        </Avatar>

                                    </Stack>
                                </MenuButton>
                                <MenuList>
                                    <NavLink to="/perfil"> <MenuItem>Meu Perfil
                                    </MenuItem></NavLink>

                                    <NavLink to="/publicar"> <MenuItem>Publicar
                                    </MenuItem></NavLink>

                                    <NavLink to="/sobre"> <MenuItem>Sobre o Projeto
                                    </MenuItem></NavLink>


                                    <NavLink to="/sair"> <MenuItem>Sair
                                    </MenuItem></NavLink>
                                </MenuList>
                            </Menu>
                        </MenuMobileButton>}
                    </Flex>

                    {isOpen && !logged && (
                        <motion.div
                            initial={{ opacity: 0, y: -20 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -20 }}
                            transition={{ duration: 0.3 }}
                        >
                            <Box pt={4} pb={4} display={{ md: 'none' }}>
                                <Stack as="nav" spacing={4}>
                                    <NavLink to="/">Home</NavLink>
                                    <NavLink to="/sobre">Sobre o Projeto</NavLink>
                                    <NavLink to="/acesso">
                                        <LoginLink>
                                            Acesso / Criar
                                            <FiUser size='22' color='#212121' />
                                        </LoginLink>
                                    </NavLink>
                                </Stack>
                            </Box>
                        </motion.div>
                    )}
                </Box>
            </Container >
        </HeaderContainer>
    );
}

export default Header;