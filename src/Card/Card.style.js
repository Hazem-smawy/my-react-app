import styled from 'styled-components'
import { Flex ,DefaultBox, DefaultBtn} from '../styles/Theme'
export const CardContainer = styled.div`
padding:1rem 0;
display:grid;
grid-template-columns:1fr;
grid-auto-rows:1fr;
width:100%;
gap:1rem;
`
export const CardItemContainer = styled.div`
background:${(prop)=>prop.theme.colors.boxSecond};
padding:.5rem;
border-radius:.4rem;
display: grid;
grid-template-columns: 120px 1fr 30px;
align-items: center;
grid-auto-rows: 1fr;
gap:1rem;
`
export const ItemImg = styled.div`

overflow:hidden;
border-radius:.4rem;

img {
    border-radius:.4rem;
    height:80px;
}

`
export const ItemText = styled.div`
font-family:'c';

display:flex;
justify-content:flex-start;
flex-direction:column;
color:${(prop)=>prop.theme.colors.black};

h3 {
    font-size:1.1rem;
}
h4 {
    font-size:1rem;
    color:${(prop)=>prop.theme.colors.p};
}

div {
    font-size:1;
    font-familly:'c';
    display:flex;
    width:100%;
    

    span {
       
        ${Flex}
        width:25px;
        height:25px;
        margin-right:5px;
        border-radius:5px;
        opacity:.7;
        color:${(prop)=>prop.theme.colors.white};
        background:${(prop)=>prop.theme.colors.first};

        &:hover {
            opacity:1;
        }
    }
    span:nth-child(2) {
        opacity:1;
        background:${(prop)=>prop.theme.colors.box};
    }
}
`
export const ItemOption = styled.div`
 position:relative;
 align-self: self-start;
 span {
        position:absolute;
        right:0;
        top:0;
        ${Flex}
        height:20px;
        width:20px;
        color:${(prop)=>prop.theme.colors.p};
        font-size:1.2rem;
        font-family:'c'; 
        border-radius:50%;
    }
`
export const CardSummary = styled.div`
    padding:1rem;
    border-radius:.5rem;
    ${DefaultBox}
    color:${(prop)=>prop.theme.colors.black};
    div {
        display:flex;
        justify-content:space-between;
        margin-bottom:.5rem;
        h5 {
            font-size:1.2rem;
        }
        &.total {
            font-size:1.4rem;
            color:${(prop)=>prop.theme.colors.like};
            font-weight:bold;
        }
    }
  
  
   
    button {
        ${DefaultBtn}
        margin-top:1rem; 
        padding:.5rem 1rem;
        border-radius:.3rem;
    }
`
 
