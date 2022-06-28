import styled ,{keyframes}from "styled-components";

import {DefaultP, DefaultBtn, DefaultTitle, DefaultBox, device } from "../styles/Theme";

const ImageAnimate = keyframes`
0%{transform:scale(3)}
50%{transform:scale(2)}
100%{transform:scale(1)}

`
const RelatedAnimate = keyframes`
0% {    transform: translateY(-83px); opacity:0}

100% {    transform: translateY(0px); opacity:1}
`

export const ProductBox = styled.div`
    font-family:'c';
    overflow: hidden;
    
    @media(${device.mobile}){
        padding:2rem;
        background:${(prop)=>prop.theme.colors.boxSecond};
        border-radius:1rem;
    }
   
  
`
export const ImageBox = styled.div`
border-top-right-radius: .5rem;
border-top-left-radius: .5rem;
    margin-top:.5rem;
    background:${(prop)=>prop.theme.colors.boxSecond};

    @media(${device.mobile}){
      
    }
    img {
        width:100%;
        border-radius:.5rem;
        border-bottom-right-radius: 3rem;
        transition:all .3s;
        animation:${ImageAnimate} .3s ;

        @media (${device.mobile}){
          
        }
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
margin:1rem 0;

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
border-bottom-right-radius: 1rem;
border-bottom-left-radius: 1rem;
@media(${device.mobile}){
 
}
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
     @media(${device.mobile}){
        font-size:1.2rem;
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
 background-color:${(prop)=>prop.theme.colors.bg};
 @media(${device.mobile}){
    display: grid;
    grid-template-columns: repeat(3,1fr) ;
    gap:1rem;
    overflow:hidden;
  }
 img {
   
   
     margin-right:1rem;
     height:60px;
     border-radius:.3rem;
     

     @media(${device.mobile}){
        margin:0;
        width: 100%;
        height: 100%;
      }
 }
`
export const Image = styled.div` 

transition: all .4s cubic-bezier(0.47, 0.42, 0.67, 1.13);
animation:${RelatedAnimate} 1s ;
animation-delay: ${(prop)=>(prop.id * .2)}s;
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

    @media(${device.mobile}){
        justify-content:space-around;
        background-color:${(prop)=>prop.theme.colors.bg};
        max-width:85%;
        left:50%;
        transform:translateX(-50%);
        border-radius:1rem;
    }   
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

    @media (${device.mobile}){
        flex:1;
        padding:.5rem;
        font-size:1.2rem;
    }
}

`
