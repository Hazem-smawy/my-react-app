import styled from 'styled-components'
import {DefaultBox} from '../../styles/Theme'

export const  ItemsContainer = styled.div`
column-count: 1;
column-gap: 1rem;
margin: 1rem 0;
padding: 3px;

`
export const ItemBox = styled.div`
 position:relative;
 overflow:hidden;
 border-radius:.5rem;
 ${DefaultBox}
 margin-bottom:1rem;

 `
 export const ItemImage = styled.div`
 overflow:hidden;
 border-radius:.5rem;
   img{
      border-radius:.5rem;
      overflow:hidden;
      width:100%;
      
   }

 `
 export const Love = styled.span`
    position:absolute;
    right:0px;
    top:0px;
    z-index:1;
    display:flex;
    justify-content:center;
    align-items:center;
    padding:.5rem;
    font-size:1.6rem;
    color:${(prop)=>prop.theme.colors.love};
 `
 export const ItemText = styled.div`
   font-family: 'm';
   position: relative;
   padding: 1rem 0.4rem;
   display: grid;
   grid-template-columns: 1fr 55px;
   gap: 1rem;
   

    
    div {
    text-align:left;
      div {
         display:flex;
         align-items:center;
    
         .icon {
            font-size:1rem;
            margin-right:5px;
            margin-bottom:5px;
         }
      }
      .star {
         color:${(prop)=>prop.theme.colors.star};
      }
      .like {
         color:${(prop)=>prop.theme.colors.like};
      }

    }
    div h2 {
      font-size:1.2rem;
      font-weight:normal;
      margin-bottom:5px;
      color:${(prop)=>prop.theme.colors.black};
    }
    div h3 {
    font-size:1rem;
    color:${(prop)=>prop.theme.colors.supTitle};
    }
    div p {
      font-size:.9rem;
      color:${(prop)=>prop.theme.colors.p};
    }
 `
 export const AddIcon = styled.div`
    position:absolute;
    bottom:0;
    right:0;
    font-size:1.8rem;
    padding:.3rem;
    color:${(prop)=>prop.theme.colors.black};
 `