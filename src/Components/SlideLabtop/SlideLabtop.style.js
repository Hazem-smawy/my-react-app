import styled, { css, keyframes } from "styled-components";
import {DefaultBtn, DefaultP, device, Flex } from '../../styles/Theme'
const backSize= css`
background-size:cover;
background-position:center;
`



const translateBox = (i,f)=>keyframes`
    0%{
        transform: translateX(${i}px);
       opacity:0;
    }
    100%{
        transform:translateX(${f}px);
        z-index:0;
     
    }
 
`
const translateTextBox =(i,f)=> keyframes`
    0%{
        transform: translateY(${i}%);
       opacity:.6;
    }
    100%{
        transform:translateY(${f}%);
        opacity:1;
     
    }
 
`
const textAnimation = css`
animation:${(prop)=>translateTextBox(prop.tr,prop.tv)} .4s  cubic-bezier(0, 0, 0.81, 0.49) forwards;
`
const scaleSlide = keyframes`
0%{
    transform: scale(.9);
}
100%{
    transform:scale(1);
 
}
`
const spnaWidth = keyframes`
0%{
    width:0;
}
100%{
    width:100%;
    transform: translateX(100%);
}

`
const scaleAnimation = css`
animation:${scaleSlide} .3s linear;
`

export const SlideContainer = styled.div`

font-size:'g';
height:95vh;
width:100%;
position:relative;
overflow:hidden;
background-image:url(${(prop)=>prop.back});
${backSize}
display:none;
${scaleAnimation}
@media (${device.labtop}){
    display:block;
}
transition:all .3s;

.top {
    animation:${spnaWidth} 3s infinite;
    display:block;
    transition: width 1s cubic-bezier(0.18, 0.21, 0.92, 0.5) 0s;
    height:4px;
    background:${(prop)=>prop.theme.colors.first};
}
`
export const SlideImg = styled.div`
    position: absolute;
    display: flex;
    align-items:center;
    left: 40%;
    top: 65%;
    transform: translateY(-50%);
    overflow-x:hidden;

`
export const ImageBox = styled.div`
    width:200px;
    height:300px;
    margin-left:1.5rem;
    border-radius:1rem;
    background-image:url(${(prop)=>prop.back});
    color:white;
    ${backSize}
    display:flex;
    flex-direction:column;
    justify-content: end;
    align-items: start;
    padding:.5rem;
    z-index:1;
    transition:all .3s linear;
    animation:${(prop)=>translateBox(prop.tr,prop.last)} 1s linear forwards;
    opacity:1;
   .active {
    
     opacity:.5;
   }
    .title {
        display:flex;
        flex-direction:column;
        justify-content: space-between;
        align-items: baseline;
        position:relative;
        z-index:2;

        h4 {
      
            font-size:1.3rem;
            color:#fff;
            margin-top:.5rem;
        }
        div {
            margin-top:.2rem;
            display:flex;
        }
        .star,.like {
            ${DefaultP}
           
            
            span {
                font-size:.8rem;
                
            }
            .icon {
                font-size:.9rem;
               
            }
        }
        .star {
            ${Flex}
            color:${(prop)=>prop.theme.colors.star};
            margin-right:1rem;
        }
        .like {
            color:${(prop)=>prop.theme.colors.like};
            ${Flex}
        }
    }
    
    p{
        margin-top:.5rem;
        ${DefaultP}
        z-index:2;
        position:relative;
        width: 190px;
        white-space:nowrap;
        text-overflow: ellipsis;
        overflow: hidden;
        
    }
    position:relative;
    &::before {
        border-radius:1rem;
        content:'';
        position:absolute;
        width:100%;
        height:100%;
        left:0;
        top:0;
        background:${({theme})=>theme.colors.colorOpacity};
    }


`

export const SlideText = styled.div`
${textAnimation}
transition:all .3s ;
position:absolute;
left:110px;
height:200px;
width: 334px;
padding: 0.5rem;
top:50%;
transform:translateY(50a%);
color:white;
h3 {
    font-size: 3rem;
    letter-spacing: -.3rem;
    font-weight: bolder;
    color: #fff;
}
p{
    font-size: 1.5rem;
    color: #eae5e5;
}
button {
    margin-top:1rem;
    ${DefaultBtn}
    width:fit-content;
    font-size:1.1rem;
    padding: .5rem 1rem;
    border-radius:.5rem;
}
`
export const SlideBtn = styled.div`
position:absolute;
width:60vw;
height:60px;
bottom:0;
left:50%;
display:flex;
justify-content:flex-start;
align-items:center;

.count {
    color:#fff;
    font-size:2.5rem;
    margin-left:1rem;
    font-weight:bolder;
    letter-spacing:-0.2rem;
    font-family:'c';
}
`
export const Control = styled.div`
display:flex;
justify-content:center; 
&:hover:${(prop)=>prop.theme.colors.firstHover}; 
span {
    width:45px;
    height:45px;
    background:${(prop)=>prop.theme.colors.first};
    color:${({theme})=>theme.colors.white};
  
    font-size:1.2rem;
    ${Flex}

    margin-right:1rem;
    border-radius:50%;
}
`

export const SlideSpans = styled.div`
border-radis:.5rem;
 width:60%;
 height:4px;
 position:relative;
 background:#777;
    &::before {
        border-radis:.5rem;
        content:'';
        left:0;
        top:0;
        height:100%;
        position:absolute;
        width:${(prop)=>prop.width}%;
        background:${(prop)=>prop.theme.colors.first};
    }
`