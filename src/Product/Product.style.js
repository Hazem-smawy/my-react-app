import styled from "styled-components";

export const ProductBox = styled.div`
    font-family:'c';
`
export const ImageBox = styled.div`
 position:relative;
 margin-top:1rem;
 img {
     width:100%;
     border-radius:.5rem;
 }
 &::before {
    content: '';
    position: absolute;
    width: 58px;
    height: 49px;
    border-radius: 50%;
    right: 0.1rem;
    bottom: 0.4rem;
    box-shadow: 1rem 1rem #fff;
 }
`
export const Icons = styled.div`
position: absolute;
top: 0;
left: 0;
display: flex;
justify-content: space-between;
width: 100%;
font-size: 1.5rem;
 color:${(prop)=>prop.theme.colors.black};
 span {
    padding:.5rem;
 }
 span:last-child {
     
    border-bottom-left-radius: 1rem;
    background:${(prop)=>prop.theme.colors.boxSecond};
 }
`
export const NameLove = styled.div`
    display: flex;
    justify-content: space-between;
    padding: 1rem 0 1rem;
    font-size: 1.2rem;
    color: #222;
    h4 {
        font-family:'c';
        font-size:1.3rem;
        font-weight:normal;
    }
    p {
        color:${(prop)=>prop.theme.colors.first};
    }
`
export const Properaties = styled.div`
display: flex;
justify-content: center;
flex-direction: column;
align-items: flex-start;
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
 display:flex;
 justify-content:flex-start;
 padding:1rem 0;
 img {
     margin-right:1rem;
     width:50px;
     height:50px;
     border-radius:.3rem;
 }
`
export const Description = styled.div`
color:${(prop)=>prop.theme.colors.p};
font-size:.9rem;
padding:1rem 0;
font-family:'m';
`
export const AddToCard = styled.div`
width:100%;
position:fixed;

bottom:0;
left:0;
display:flex;
justify-content:space-between;

padding: 1.5rem;
font-family:'c';
h4 {
    padding-right:.5rem;
    font-size:1.3rem;
    font-weight:normal;
    margin-left:1rem;
    flex:1;
}
button {
    flex:2;
    outline:none;
    border:none;
    border-radius:.3rem;
    padding: .2rem .4rem;
    display:flex;
    justify-content:center;
    align-items:center;
    color:#fff;
    background:${(prop)=>prop.theme.colors.first};
    span {
        padding-left:.5rem;
    }

}

`
