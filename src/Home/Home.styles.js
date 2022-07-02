import styled from 'styled-components'
import {device, DefaultP,DefaultTitle ,DefaultSupTitle} from '../styles/Theme'
export const Container = styled.div`
    margin:0 auto;   
    width:90vw;
    max-width:1300px;
    padding:0 .5rem 0;
    background:${(prop)=>prop.theme.colors.bg};
    
    &.active {
        filter: blur(3px);
        opacity: .8;
    }

    @media(${device.mobile}){
        padding:0 1rem 0;
    }
`
export const TextTitle = styled.div`
   
    margin-bottom:1rem;
    h2 {
        ${DefaultTitle}
    }
    p {
        ${DefaultP}
        margin-top:-.3rem;
        margin-left:.5rem;
    }

    @media(${device.mobile}){
        margin:1rem 0;
    }
    @media(${device.mobile}){
       display:none;
    }

`
export const NewData = styled.div`
h3 {
    ${DefaultSupTitle}
    margin:1rem 0;
}
@media(${device.mobile}){
    margin:2rem 0;
}
`
