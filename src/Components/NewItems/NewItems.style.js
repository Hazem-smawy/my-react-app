import styled from 'styled-components'

export const HomeNewItemsContainer = styled.div`
margin-top:1rem;

h2 {
    font-size:1.3rem;
    margin-bottom:1rem;
    font-family:'c';
    color:${(prop)=>prop.theme.colors.black};
}

`
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
 background:${(prop)=>prop.theme.colors.boxSecond};
 margin-bottom:1rem;

 `
 export const ItemImage = styled.div`
 overflow:hidden;
 border-radius:.5rem;
   img{
      border-radius:.5rem;
      overflow:hidden;
      width:330px;
      
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
    font-size:2rem;
    color:#f90202;
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
            font-size:1.5rem;
            margin-right:5px;
         }
      }
      .star {
         color:blue;
      }
      .like {
         color:green;
      }

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
 export const AddIcon = styled.div`
    position:absolute;
    bottom:0;
    right:0;
    font-size:1.8rem;
    padding:.3rem;
    color:${(prop)=>prop.theme.colors.black};
 `