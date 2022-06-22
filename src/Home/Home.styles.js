import styled from 'styled-components'
import { DefaultP,DefaultTitle ,DefaultSupTitle} from '../styles/Theme'
export const Container = styled.div`
    margin:0 auto;   
    width:90vw;
    padding:0 .5rem 0;
    background:${(prop)=>prop.theme.colors.bg};
    
    &.active {
        filter: blur(3px);
        opacity: .8;
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

`
export const NewData = styled.div`
h3 {
    ${DefaultSupTitle}
    margin-bottom:1rem;
}
`
