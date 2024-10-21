import { Container, TitleOne } from '../../../globals/GlobalStyles'
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { FormControl, FormLabel, FormHelperText, Input, Button, Text, Flex, Box, Alert, AlertIcon } from '@chakra-ui/react'
import { Link } from 'react-router-dom';
import { LoginContainer } from './styles';
import { useState } from 'react';

const schema = yup.object().shape({
    email: yup
        .string()
        .email('Por favor, insira um email válido')
        .max(30, 'O email não deve ultrapassar o limite de caracteres')
        .required('O email é obrigatório'),
    password: yup
        .string()
        .min(4, 'A senha deve ter pelo menos 4 caracteres')
        .max(150, 'A senha não deve ultrapassar o limite de caracteres')
        .required('A senha é obrigatória'),
});

const Login = () => {

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm({
        resolver: yupResolver(schema)
    });

    const [loginStatus, setLoginStatus] = useState({ status: null, msg: null });
    const [loading, setLoading] = useState(false);


    const submit = (data) => {
        console.log(data);
        setLoginStatus({ status: null, msg: null });

        const formData = new FormData();
        formData.set('email', data.email);
        formData.set('password', data.password);

        setLoading(true);
        fetch('http://localhost/api/v1/auth/login', {
            method: 'POST',
            body: formData
        }).then(res => res.json())
            .then(resp => {

                setLoginStatus({ status: resp.status, msg: resp.message });
                console.log(resp);
                setLoading(false);
            })
    };

    return (
        <Container>
            <LoginContainer>
                <TitleOne position={'center'}>Acesse Sua Conta:</TitleOne>

                {(loginStatus.status != null) && <Alert borderRadius={5} mb={3} status={loginStatus.status ? 'success' : 'error'}>
                    <AlertIcon />
                    {loginStatus.msg}
                </Alert>}

                <form action="" onSubmit={handleSubmit(submit)}>
                    <FormControl>
                        <FormLabel>Seu Email</FormLabel>
                        <Input type='email' {...register('email')} placeholder={"email@example.com"} />
                        {errors.email && <FormHelperText color="red">{errors.email.message}</FormHelperText>}


                        <FormLabel mt={5}>Senha</FormLabel>
                        <Input type='password' {...register('password')} placeholder={"********"} />
                        {errors.password && <FormHelperText color="red">{errors.password.message}</FormHelperText>}
                    </FormControl>

                    <Flex justifyContent={'space-between'} flexWrap={'wrap'} mt={4} fontSize='sm'>

                        <Box mb={2}>
                            Ainda não tem conta? <Text style={{ display: 'inline' }} color='primary'>
                                <Link to='/criar'>
                                    Crie sua conta.
                                </Link>
                            </Text>
                        </Box>

                        <Text color='primary'>
                            <Link to='/home'>
                                Esqueci minha senha!
                            </Link>
                        </Text>
                    </Flex>

                    <Button isLoading={loading} loadingText='Acessando' mt={4} type="submit">Entrar</Button>
                </form>
            </LoginContainer>
        </Container>
    )
}

export default Login