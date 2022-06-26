import styled from 'styled-components'

export const Title = styled.div`
    
    margin-bottom:1.5rem;
    top: -7px;
    left: 0;
    width: 100%;
    border-radius: 0.5rem;
    margin: 1px auto;
    padding: 0.5rem 1rem;
`
export const Icons = styled.div`
display: flex;
justify-content: space-between;
width: 100%;
font-size: 1.5rem;
padding:.5rem;
color:${(prop)=>prop.theme.colors.black};
background:${(prop)=>prop.theme.colors.bg};
margin-bottom:.5rem;


`