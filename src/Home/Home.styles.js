import styled from 'styled-components'
export const Container = styled.div`
    margin:0 auto;
    
    width:90vw;
    padding:0 .5rem 0;
    background:${(prop)=>prop.theme.colors.bg}
`
export const Header = styled.header`
    display:flex;
    justify-content:space-between;
    align-items:center;
    padding:1rem;
    margin:0rem .3rem 1rem;
    color:${(prop)=>prop.theme.colors.black};
    font-size:1.3rem;
    
`
export const Logo = styled.div`
padding:.5rem;
border-radius:.5rem;
background-color:${(prop)=>prop.theme.colors.boxSecond};

`
export const App = styled.nav`
padding:.5rem;
border-radius:.5rem;
background-color:${(prop)=>prop.theme.colors.boxSecond};

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
export const Categories = styled.div`
    hieght:60px;
    display:flex;
    justify-content:space-between;;
    
`
export const CatItem = styled.div`
        margin-right:.5rem;
        height:50px;
        width:50px;
        background-color:${(prop)=>prop.theme.colors.boxSecond};
        display:flex;
        justify-content:center;
        align-items:center;
        font-size:1.5rem;
        border-radius:.5rem;
`
