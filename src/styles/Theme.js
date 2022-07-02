import {css} from 'styled-components'
import { createGlobalStyle } from 'styled-components'

export const device = {
    mobile:`min-width: 768px`,
    tablet:`min-width: 922px`,
    labtop:`min-width: 1024px`,
    desktop:`min-width: 2560px`,
}
export const GlobalStyle = createGlobalStyle`
body {
    background:${(prop)=>prop.theme.colors.bg};
}
.labtop {
    display:none;
}
@media (${device.labtop}){
    .phone {
        display:none;
    }
    .labtop {
        display:block;
    }
}

`





let fonts={
    p:'1rem',
    title:'1.3rem',
    supTitle:'1.2rem',
    smallTitle:'1.1rem',
    bigIcon:'1.5rem',
    midIcon:'1.2rem',

}
const light={
    colors:{
        first:'#dc0c38',
        white:"#fff",
        black:"#000000",
        supTitle:'#333',
        supSecond:'#a19c9c',
        p:'#777',
        bg:'#fff',
        boxSecond:'#eee',
        star:'#ffbf18',
        like:'#4f48ec',
        love:'#c81d4c',
        SubBox:'#f2f2f2',
        firstHover:'#7c061f',
        colorOpacity:'#00000078'

    },
   fonts
}
const dark={
    colors:{
        first:'#b9f245',
        white:"#111",
        black:"#fff",
        supTitle:'#eae5e5',
        supSecond:'#a19c9c',
        p:'#777',
        bg:'#0d1715',
        boxSecond:'#1f2928',
        star:'#ffbf18',
        like:'#4f48ec',
        love:'#c81d4c',
        SubBox:'#0f3754',
        firstHover:'#ddfe99',
        colorOpacity:'#00000078'
    },
    fonts
}

const theme  = {
    dark,
    light
}

export const DefaultInput= css`
border:none;
outline:none;
background:transparent;

`
export const DefaultTitle = css`
color:${(prop)=>prop.theme.colors.black};
font-size:1.3rem;
font-family:'m';

@media (${device.mobile}){
    font-size:1.4rem;
}


`
export const DefaultSupTitle = css`
color:${(prop)=>prop.theme.colors.supTitle};
font-size:1.1rem;
font-family:'m';

@media (${device.mobile}){
    font-size:1.2rem;
}

`
export const DefaultSupSecond= css`
color:${(prop)=>prop.theme.colors.supSecond};
font-size:1rem;
font-family:'m';
`

export const DefaultP = css`
color:${(prop)=>prop.theme.colors.p};
font-size:.9rem;
font-family:'c';

@media (${device.mobile}){
    font-size:1.1rem;
}

`


export const DefaultBtn = css`
font-family:'m';
border:none;
outline:none;
background:${(prop)=>prop.theme.colors.first};
color:${(prop)=>prop.theme.colors.white};
&:hover {
    background:${(prop)=>prop.theme.colors.firstHover};
}
`
export const Flex = css`
display:flex;
justify-content:center;
align-items:center;
`
export const DefaultBox = css`
background:${(prop)=>prop.theme.colors.boxSecond};
box-shadow:0 1px 2px 0px rgb(0 0 0 / 21%);
`
export const DefaultBoxIcon = css`
background:${(prop)=>prop.theme.colors.boxSecond};


&.active,&:hover {
    background:${(prop)=>prop.theme.colors.black};
    color:${(prop)=>prop.theme.colors.white};
}
`
export default  theme;