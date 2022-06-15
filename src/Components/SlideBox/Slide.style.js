import styled from 'styled-components'
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
background-color:${(prop)=>prop.theme.colors.boxSecond};
overflow:hidden;
border-radius:.5rem;
justify-content:center;
div {
    display: grid;
    justify-content: center;
    align-items: center;

    li {
        padding:.7rem;
        font-size:17px;
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
            background:black;
        }
    }
}
`
export const Sliders = styled.div`
 height:100%;
 width:100%;
 border-radius: 0.7rem;
 background-color:${(prop)=>prop.theme.colors.boxSecond};
 position:relative;
 display: grid;
 grid-template-rows: 1fr 20px;
 
 

`

export const Slide = styled.div`
 display:flex;
 width:100%;
 text-align:center;
 justify-content: center;
 position:relative;
`
export const SlideImage = styled.div`
img {
    max-hieght:100%;
    width:100%;
    background-color:${(prop)=>prop.theme.colors.boxFirst};
    border-radius: 0.7rem;
    overflow:hidden;
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
        background:black;
    }
`
export const TextBox = styled.div`
position: absolute;
font-family:'m';
background: #eee;
bottom:.5rem;
padding: 0.5rem;
width: 90%;
border-radius: 0.3rem;
display: grid;
grid-template-columns:3.5fr 1fr;
justify-content: space-between;
align-items: center;
gap:.4rem;

button {
    font-family:'m';
    ouline:none;
    border:none;
    background-color:${(prop)=>prop.theme.colors.btnSecond};
    width:fit-content;
    padding:.5rem;
    color:${(prop)=>prop.theme.colors.white};
    border-radius:.4rem;
    white-space:nowrap;
    text-overflow:ellipsis;
}
div {
    text-align:left;

}
div h3 {
    font-size:1rem;
    color:${(prop)=>prop.theme.colors.supTitle};
}
div p {
    font-size:.8rem;
    color:${(prop)=>prop.theme.colors.p};
}
`