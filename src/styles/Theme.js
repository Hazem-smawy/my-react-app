import {css} from 'styled-components'
import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
body {
    background:${(prop)=>prop.theme.colors.bg};
}
`
export const DefaultInput= css`
border:none;
outline:none;
background:transparent;

`
export const DefaultP = css`
color:${(prop)=>prop.theme.colors.p};
font-size:.9rem;
font-family:'c';
`
export const DefaultTitle = css`
color:${(prop)=>prop.theme.colors.black};
font-size:1.3rem;
font-family:'m';
`
export const DefaultSupTitle = css`
color:${(prop)=>prop.theme.colors.supTitle};
font-size:1.1rem;
font-family:'m';
`
export const DefaultBtn = css`
border:none;
outline:none;
background:${(prop)=>prop.theme.colors.first};
color:${(prop)=>prop.theme.colors.white};
`
export const Flex = css`
display:flex;
justify-content:center;
align-items:center;
`
export const DefaultBox = css`
background:${(prop)=>prop.theme.colors.boxSecond};
`
const light={
    colors:{
        first:'#dc0c38',
        white:"#fff",
        black:"#000000",
        supTitle:'#333',
        p:'#777',
        bg:'#fff',
        boxSecond:'#eee',
        star:'#ffbf18',
        like:'#4f48ec',
        love:'#c81d4c',
        SubBox:'#f2f2f2'

    }
}
const dark={
    colors:{
        first:'#b9f245',
        white:"#111",
        black:"#fff",
        supTitle:'#eae5e5',
        p:'#777',
        bg:'#0d1715',
        boxSecond:'#1f2928',
        star:'#ffbf18',
        like:'#4f48ec',
        love:'#c81d4c',
        SubBox:'#0f3754'
    }
}

const theme  = {
    dark,
    light
}
export default  theme;