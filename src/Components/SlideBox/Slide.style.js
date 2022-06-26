import styled from 'styled-components'
import {DefaultBtn,DefaultBox, DefaultSupTitle, DefaultP} from '../../styles/Theme'
export const SlidersBox = styled.div`
margin: 1rem 0 1rem;
border-radius: .5rem;
display: grid;
gap:.5rem;
grid-template-columns: 50px 1fr;
height:250px;

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
        padding:.7rem;
        font-size:1.1rem;
        list-style:none;
        font-family:'g';
        transform:rotate(270deg);
        text-align:center;
        font-weight:normal;
        position:relative;

        &::before {
            content: '';
            height: 5px;
            width: 21px;
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
        .right:hover,.left:hover {
            color:${(prop)=>prop.theme.colors.first};
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
img {
    border-radius: 0.7rem;
    max-hieght:100%;
    width:100%;
    ${DefaultBox}
}

`
export const Bollets = styled.div`
 display:flex;
 justify-content:center;
 margin-top:6px;
    li {
        list-style:none;
        height: 5px;
        width: 9px;
        background: #a0a0ac;
        border-radius: 0.5rem;
        margin-left:5px;
    }
    li.active {
        width: 21px;
        background:${(prop)=>prop.theme.colors.first};
    }
`
export const TextBox = styled.div`
${DefaultBox}
width: 90%;
position: absolute;
transform: translateX(-50%);
left: 50%;

font-family:'m';
background: #eee;
bottom:.3rem;
padding: 0.5rem;

border-radius: 0.3rem;
display: grid;
grid-template-columns:3.5fr 1fr;
justify-content: space-between;
align-items: center;
gap:.4rem;

button {
    ${DefaultBtn}
    width:fit-content;
    padding:.5rem;
    border-radius:.4rem;
    white-space:nowrap;
}
div {
    text-align:left;
    h3 {
        ${DefaultSupTitle}
        font-size:1rem;
        
    }
     p {
        ${DefaultP}
        font-size:.8rem;
    }
}

`