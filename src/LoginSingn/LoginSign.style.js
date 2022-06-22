import styled from 'styled-components'
import {DefaultP,DefaultTitle,DefaultInput} from '../styles/Theme'
export const FormContainer = styled.div`
display: grid;
grid-template-columns: 1fr;
gap:.4rem;
font-family:'c';
width:100%;
`
export const LoginText = styled.div`
    padding:1rem;
    text-align:center;

    img {
        width:50px;
        height:50px;
        border-radius:50%;
    }
    h3 {
        ${DefaultTitle}
    }
    p {
        margin-top:.5rem;
       ${DefaultP}
    }

`
export const Form = styled.div`
    display: flex;
    justify-content: center;
    form {
        display: grid;
        grid-template-columns: 1fr;
        gap:1rem;
        justify-content:center;
        width:300px;
        font-family:'c';
        div {
            
            width:100%;
            background:${(prop)=>prop.theme.colors.boxSecond};
            border-radius:.4rem;
            padding:.7rem;
            display:flex;

            input {
               ${DefaultInput}
                margin-left:.5rem;
                width:100%;
            }
            
        }
       
        div:last-child {
            display:flex;
            justify-content:center;
            background:${(prop)=>prop.theme.colors.first};
            color:#fff;
            input[type='submit']{
                color:#fff;

                width:auto;
            }
        }
    }
`

export const Forget = styled.div`
    width:200px;
    display:flex;
    margin:0 auto;
    justify-content:space-between;

    p {
        ${DefaultP}
    }
`
