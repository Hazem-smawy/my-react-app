import styled from 'styled-components'

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
        color:white;
        display:flex;
        justify-content:center;
        align-items:center;
        width:25px;
        height:25px;
        margin-right:5px;
        border-radius:5px;
        opacity:.7;
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
        display:flex;
        height:20px;
        width:20px;
        justify-content:center;
        align-items:center;
        font-size:1.3rem;
        font-family:'c';
        color:#777;
        border-radius:50%;
    }
`
export const CardSummary = styled.div`
    padding:1rem;
    background:${(prop)=>prop.theme.colors.boxSecond};
    font-family:'c';
    div {
        display:flex;
        justify-content:space-between;
        margin-bottom:.5rem;
        h5 {
            font-size:1.2rem;
        }
       
    }
    &.total {
        font-size:1.4rem;
        color:blue;
        font-weight:bold;
    }
  
   
    button {
        margin-top:1rem;
        background:${(prop)=>prop.theme.colors.first};
        color:#fff;
        padding:.5rem 1rem;
        outline:none;
        border:none;
        border-radius:.3rem;
    }
`
 
