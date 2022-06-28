import styled from 'styled-components'
import { DefaultSupTitle, device } from '../styles/Theme'
export const Title = styled.div`
    
    margin-bottom:1.5rem;
    left: 0;
    width: 100%;
    border-radius: 0.5rem;
    margin: 1rem auto;
    padding: 0.5rem 1rem;
    @media (${device.mobile}){
        margin:2rem auto;
    }
`
export const Icons = styled.div`
display: flex;
justify-content: space-between;
width: 100%;
padding:.5rem;
${DefaultSupTitle}
background:${(prop)=>prop.theme.colors.bg};
margin-bottom:.5rem;


`