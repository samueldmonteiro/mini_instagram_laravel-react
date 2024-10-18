import styled from 'styled-components';

export const Logo = styled.img`
    width: 60px;
    height: 60px;
    position: relative;
    left: -10px;
    top:-2px;
`

export const LoginLink = styled.span`
    display: flex;
    column-gap: 7px;
`

export const HeaderContainer = styled.header`
    box-shadow: 0px 1px 1px rgba(0,0,0,0.1);
`

export const MenuMobileButton = styled.div`
    @media (min-width: 768px){
        display: none;
    }
`