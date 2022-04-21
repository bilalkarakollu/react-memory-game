import styled, { createGlobalStyle } from 'styled-components';

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


export const Button = styled.button`
    background-color: ${({bg, disabled}) => disabled ? '#ccc' : bg};
    border: none;
    border-radius: 5px;
    padding: 10px;
    font-size: 1.5rem;
    font-weight: bold;
    color: ${({color}) => color};
    cursor: ${({disabled}) => disabled ? 'not-allowed' : 'pointer'};
    margin-right: 10px;
    transition: all 0.3s;
    &:hover{
        background-color: ${({bg, disabled}) => disabled ? '#ccc' : '#2F2F2F'};
        color: #F4F5F7;
    }   
`;

export const Flex = styled.div`
    display: flex;
    justify-content: ${({justify}) => justify};
    align-items: center;
`;