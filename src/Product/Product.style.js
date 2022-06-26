import styled from "styled-components";
import {DefaultP, DefaultBtn, DefaultTitle, DefaultBox } from "../styles/Theme";
export const ProductBox = styled.div`
    font-family:'c';
    overflow: hidden;
`
export const ImageBox = styled.div`
border-top-right-radius: .5rem;
border-top-left-radius: .5rem;
    margin-top:.5rem;
    background:${(prop)=>prop.theme.colors.boxSecond};
    img {
        width:100%;
        border-radius:.5rem;
        border-bottom-right-radius: 3rem;
    }

`
export const Icons = styled.div`

display: flex;
justify-content: space-between;
width: 100%;
font-size: 1.5rem;
padding:.5rem;
color:${(prop)=>prop.theme.colors.black};
background:${(prop)=>prop.theme.colors.bg};
margin:.5rem 0;

span {
    color:${(prop)=>prop.theme.colors.black};
}
h4 {
    ${DefaultTitle}
}

`
export const Details = styled.div`
padding:0 1rem 2rem;
${DefaultBox}
border-bottom-right-radius: .5rem;
border-bottom-left-radius: .5rem;

`
export const NameLove = styled.div`
    display: flex;
    justify-content: space-between;
    padding: 1rem 0 1rem;
    font-size: 1.2rem;
    h4 {
       ${DefaultTitle}
    }
    p {
        font-size:1.5rem;
        color:${(prop)=>prop.theme.colors.love};
    }
`
export const Properaties = styled.div`
display: flex;
justify-content: center;
flex-direction: column;
align-items: flex-start;
.star {
    color:${(prop)=>prop.theme.colors.star};
 }
 .like {
    color:${(prop)=>prop.theme.colors.like};
 }
 p {
    display:flex;
    align-items:center;
    font-size:1rem;
     span {
         padding-left:.5rem;
     }
 }
`
export const Related = styled.div`
 overflow:auto;
 display:flex;
 justify-content:flex-start;
 padding:1rem .5rem;
 border-radius:.3rem;
 margin:1rem 0;
 
 img {
     margin-right:1rem;
     width:100%;
     height:60px;
     border-radius:.3rem;
     background-color:${(prop)=>prop.theme.colors.bg};
 }
`
export const Description = styled.div`
${DefaultP}
padding:1rem 0;

`
export const AddToCard = styled.div`
width:100%;
position:fixed;

bottom:0;
left:0;
display:flex;
justify-content:space-between;

padding: 1.5rem;
h4 {
    padding-right:.5rem;
    font-size:1.3rem;
    margin-left:1rem;
    flex:1;
    ${DefaultTitle}
}
button {
    ${DefaultBtn}
    margin-right:1rem;
    flex:2;
    
    border-radius:.3rem;
    padding:  .4rem;
    display:flex;
    justify-content:center;
    align-items:center;
   
    span {
        padding-left:.5rem;
    }

}

`
