import styled from "styled-components";
import {createGlobalStyle} from "styled-components";

export const Input = styled.input`
    margin: auto;
    width: 2hv;
    height: 40px;
    font-size: 25px;
    color: black;
    border: 15;
    border-radius: 5px;
`

export const Div = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100vh;
    background-image: linear-gradient(to bottom left, #79CED2, #D9F0D1);
`
export const Output = styled.h1`
    font-size: 40px;
`  
export const Button = styled.button`    
    color: #363636
    font-size: 20px;
    width: 50%;
    margin-top: 30px;
    border: 15;
    border-radius: 5px;
`
export const Form = styled.form`
    display: flex;
    flex-direction: column;
    align-items: center;
    Output{}
    Input{}
    button{}
`;