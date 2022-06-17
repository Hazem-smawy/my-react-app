import styled from 'styled-components'
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
    font-family:c;
        h2 {
            color:${(prop)=>prop.theme.colors.black};
        }
        p {
            color:${(prop)=>prop.theme.colors.p};
            margin-top:-.3rem;
            font-size:.8rem;
            margin-left:.5rem;
        }

`
export const NewData = styled.div`
h3 {
    font-size:1.3rem;
    margin-bottom:1rem;
    font-family:'c';
    color:${(prop)=>prop.theme.colors.black};
}
`
