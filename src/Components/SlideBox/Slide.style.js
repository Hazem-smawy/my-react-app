import styled, { css, keyframes } from 'styled-components'
import {device,DefaultBtn,DefaultBox, DefaultSupTitle, DefaultP} from '../../styles/Theme'
const slideAnimate = keyframes`
0%{transform:scale(.9)}
100%{transform:scale(1)}

`

export const SlidersBox = styled.div`
margin: 1rem 0 1rem;
border-radius: .5rem;
display: grid;
gap:.5rem;
grid-template-columns: 50px 1fr;
height:250px;

@media(${device.mobile}){
    grid-template-columns: 70px 1fr;
    height:400px;
    gap:1rem;
}
@media(${device.labtop}){
    height:650px;
    display:none;
}

`
export const FirstCol = styled.div`
display:flex;
flex-direction:columns;
${DefaultBox}
overflow:hidden;
border-radius:.5rem;
justify-content:center;
div {
    display: grid;
    justify-content: center;
    align-items: center;

    li {
        ${DefaultSupTitle}
        padding:.7rem;
        
        list-style:none;
        font-family:'g';
        transform:rotate(270deg);
        text-align:center;
        
        position:relative;

        &::before {
            content: '';
            height: 4px;
            width: 16px;
            position: absolute;
            background: #a0a0ac;
            bottom: 0;
            left: 50%;
            transform: translateX(-50%);
            border-radius: 0.5rem;
        }
        &.active::before {
            background:${(prop)=>prop.theme.colors.first};
        }
    }
}
`
export const Sliders = styled.div`
position:relative;
 height:255px;

 width:100%;
 border-radius: 0.7rem;
 ${DefaultBox}
 display: grid;
 grid-template-rows: 1fr 20px;
 animation:${slideAnimate} .3s ;

 @media(${device.mobile}){
    height:400px;
    grid-template-rows: 1fr 40px;
}
@media(${device.labtop}){
    height:650px;
    grid-template-rows: 1fr;
    background:transparent;
    overflow:hidden;
    
}
 

`
export const SlidersBtn = styled.div`
    position:absolute;
    width:100%;
    top:40%;
    transform:translateY(-50%);
    
    display:flex;
    justify-content:space-between;
    z-index:5;
    .right,.left  {
        font-size:1.3rem;
        margin:0 .5rem;
        padding:.3rem;
        background:#ffffff54;
        border-radius:50%;
        color:${(prop)=>prop.theme.colors.black};
        &:hover {
            color:${(prop)=>prop.theme.colors.white};
            background:${(prop)=>prop.theme.colors.black};
        }

        @media(${device.mobile}){
            margin: 0 1.2rem;
            padding:.2rem;
            font-size:1.5rem;
        }
        @media(${device.labtop}){
            font-size:2rem;
        }
       
    }
   
`

export const Slide = styled.div`
    position:relative;
    left:0;
    top:0;
    width:100%;
   overflow:hidden;
`
export const SlideImage = styled.div`
width:100%;
height:100%;
border-radius: 0.7rem;
overflow:hidden;
animation:${slideAnimate} .3s ;
transition:all .3s cubic-bezier(0.23, 0.13, 0.33, 1);
img {
    border-radius: 0.7rem;
    max-hieght:100%;
    width:100%;
    ${DefaultBox}
   
    transition:all .3s cubic-bezier(0.23, 0.13, 0.33, 1);
}

`
const BulletAnimateActive = keyframes`
0%{order:1 ;}
100%{order:4}

`

const animation=css`
    animation:${BulletAnimateActive} 1s;
    animation-fill-mode: forwards;

`

export const Bollets = styled.div`
 display:flex;
 justify-content:center;
 margin-top:6px;
 position:relative;
 @media (${device.mobile}){
     align-items:center;
 }
@media(${device.labtop}){
    position: absolute;
    right: 0;
    bottom: 1rem;
}
 

   
`
export const Bollet = styled.li`

list-style:none;
height: 5px;
width: 9px;
background: #a0a0ac;
border-radius: 0.5rem;
margin-left:5px;


transition:all .5s;

    &.active {
        
        width: 21px;
        background:${(prop)=>prop.theme.colors.first};
    }

    @media (${device.labtop}){
        
        transform-origin: center;
       
        
       
        bottom:0;
        height:100px;
        width:150px;
        background-image:url(${(prop)=>prop.img});
        background-size: cover;
        background-position: center;
        transition:all .5s;
       
        &.active {
            border: 2px solid #f3f3e3;
            transition:all 1s;
            height:100px;
            width:150px;
            background-image:url(${(prop)=>prop.img}) ;
            background-size: cover;
            background-position: center;
        }
      
    }
      
    }

`
export const TextBox = styled.div`
${DefaultBox}
width: 90%;
position: absolute;
transform: translateX(-50%);
left: 50%;
bottom:0;
padding: 0.5rem;

border-radius: 0.3rem;
display: grid;
grid-template-columns:3.5fr 1fr;
justify-content: space-between;
align-items: center;
gap:.4rem;



@media(${device.mobile}){
   width:70%;
   gap:1rem;
   bottom:.5rem;
   height: auto;
   border-radius: 0.5rem;
}

@media(${device.labtop}){
    display:flex;
    flex-direction:column;
    width:50%;
    height: fit-content;
    border-radius: .7rem;
    left: 1%;
    top: 66%;
    transform: translateY(-50%);
    justify-content:flex-start;
    align-items:flex-start;
    padding:2rem;
    background:${(prop)=>prop.theme.colors.colorOpacity};

 
}
button {
    ${DefaultBtn}
    width:fit-content;
    padding:.5rem;
    border-radius:.4rem;
    @media(${device.labtop}){
            min-width:30%;
    }
}
div {
    text-align:left;
    h3 {
        ${DefaultSupTitle}
    }
     p {
        ${DefaultP}
    }
}

`