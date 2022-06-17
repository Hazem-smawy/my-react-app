import styled from 'styled-components'

export const FooterContainer = styled.div`

width:100%;
font-family:'c';

display: grid;
    grid-template-columns: 1fr;
    gap: .5rem;

p {
    color:${(prop)=>prop.theme.colors.p};
    font-size:1rem;
}
h4 {
    color:${(prop)=>prop.theme.colors.black};
    font-size:1.3rem;
    font-family:'m';
}
`
export const LinkBox = styled.div`
border-radius:1rem;
margin-top:1rem;
width:100%;
background:${(prop)=>prop.theme.colors.boxSecond};
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
        margin-top:.6rem;
        color:${(prop)=>prop.theme.colors.p};
        & > * {
            margin-right:.5rem;

            &:hover {
                color:${(prop)=>prop.theme.colors.black};
            }
        }
    }
`
export const Links = styled.div`

`
export const CopyRight = styled.div`

    color:${(prop)=>prop.theme.colors.p};
    background:#fff;
    display:flex;
    justify-content:center;
    align-items:center;
    padding:.5rem;
    p {
        margin-right:.5rem;
    }
`