import styled from 'styled-components'
import { DefaultP, DefaultTitle, Flex,DefaultBox } from '../../styles/Theme'
export const FooterContainer = styled.div`

width:100%;
display: grid;
grid-template-columns: 1fr;
gap: .5rem;

p {
    ${DefaultP}
}
h4 {
   ${DefaultTitle}
}
`
export const LinkBox = styled.div`
border-radius:1rem;
margin-top:1rem;
width:100%;
${DefaultBox}
padding:1rem ;
display: grid;
grid-template-columns: 1fr;
gap: 1rem;
`
export const Info = styled.div`
    display:flex;
    justify-content:flex-start;
    img {
        width:50px;
        height:50px;
        margin-right:1rem;
        border-radius:50%;
    }
`
export const Media = styled.div`

    .location p {
        margin-bottom:.5rem;
        display:flex;
        align-items:center;
    }
    .location span {
        margin-left:.5rem;
    }

    .social {
        font-size:
        margin-top:.6rem;
        color:${(prop)=>prop.theme.colors.p};
        & > * {
            margin-right:.5rem;
            font-size:1.2rem;
            &:hover {
                color:${(prop)=>prop.theme.colors.black};
            }
        }
    }
`
export const Links = styled.div`

`
export const CopyRight = styled.div`
    ${Flex}
    color:${(prop)=>prop.theme.colors.p};
    background:${(prop)=>prop.theme.colors.bg};
  
    padding:.5rem;
    p {
        margin-right:.5rem;
    }
`