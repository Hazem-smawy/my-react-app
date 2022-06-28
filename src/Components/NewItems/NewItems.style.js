import styled from 'styled-components'
import {device,DefaultBox, DefaultP} from '../../styles/Theme'


export const  ItemsContainer = styled.div`
column-count: 1;
column-gap: 1rem;
margin: 1rem 0;
padding: 3px;

@media(${device.mobile}){
   column-count:2;
   column-gap: 2rem;
   margin: 2rem 0;
}
@media(${device.labtop}){
   column-count:3;
   column-gap: 2rem;
   margin: 2rem 0;
}

`
export const ItemBox = styled.div`
 position:relative;
 overflow:hidden;
 border-radius:.5rem;
 ${DefaultBox}
 margin-bottom:1rem;

 @media(${device.mobile}){
   margin-bottom:1.5rem;
}


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
   position: relative;
   padding: 1rem 0.4rem;
   
   
   .titleAndIcon {
      display:flex;
      justify-content:space-between;

      .title {
         flex:1;

         h2 {
            font-size:1.2rem;
            font-weight:normal;
            margin-bottom:5px;
            color:${(prop)=>prop.theme.colors.black};

           
          }
         h3 {
          font-size:1rem;
          color:${(prop)=>prop.theme.colors.supTitle};
           
         }
      }

      .icons {
         
        
         display:flex;
         justify-content:space-between;
         align-items:flex-start;
         div {
               display:flex;
               align-items:center;
               margin-right:1rem;

               &.star {
                  color:${(prop)=>prop.theme.colors.star};
               }
               &.like {
                  color:${(prop)=>prop.theme.colors.like};
               }
               &.what {
                  color:green;
                  margin-top: 0.3rem;
               }
               .icon {
                  
                  margin-right:5px;
                  
               }
         }
      }
    
   }
  
   
 `
 export const AddIcon = styled.div`
    
    display:grid;
    grid-template-columns:1fr 50px;
    gap:.5rem;
    
    p {
       color:${(prop)=>prop.theme.colors.p};
       font-size:.9rem;

       @media (${device.mobile}){
         font-size:1.1;
      }
       
    }
    .addIcon {
    
     
      font-size: 2rem;
      display: flex;
      align-items: self-end;
      justify-content: flex-end;
      padding-right: 0.4rem;
      .add {
         color:${(prop)=>prop.theme.colors.black};
      }
      .added {
         color:green;
      }
    }

 `