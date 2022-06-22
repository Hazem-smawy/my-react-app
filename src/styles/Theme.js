import {css} from 'styled-components'

export const DefaultInput= css`
border:none;
outline:none;
background:transparent;

`
export const DefaultP = css`
color:${(prop)=>prop.theme.colors.p};
font-size:1rem;
font-family:'m';
`
export const DefaultTitle = css`
color:${(prop)=>prop.theme.colors.black};
font-size:1.3rem;
font-family:'c';
`
export const DefaultSupTitle = css`
color:${(prop)=>prop.theme.colors.supTitle};
font-size:1.1rem;
font-family:'c';
`
export const Btn = css`
border:none;
outline:none;
background:${(prop)=>prop.theme.colors.first};
`
export const Flex = css`
display:flex;
justify-content:center;
align-items:center;
`

const theme={
    colors:{
        first:'#dc0c38',
        white:"#fff",
        black:"#000000",
        supTitle:'#333',
        p:'#777',
        bg:'#fff',
        boxSecond:'#eee',
    }
}

export default  theme;