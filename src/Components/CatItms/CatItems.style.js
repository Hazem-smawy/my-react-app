import styled from 'styled-components'
import {device, Flex ,DefaultBoxIcon, DefaultSupTitle} from '../../styles/Theme'
export const Categories = styled.div`
    hieght:60px;
    display:flex;
    justify-content:space-between;
    margin:1rem 0;
    span {
        display:none;
    }
    @media(${device.mobile}){
       justify-content:flex-start;
       
    }

    @media(${device.labtop}){
        position: absolute;
        flex-direction: column;
        left: 2rem;
        top: 0;
        margin-top: 2rem;
        width: 100px;
        height: 400px;
        justify-content: space-between;
        
      
    }
    
`
export const CatItem = styled.div`
        ${Flex}
        margin-right:.5rem;
        height:50px;
        width:50px;
        ${Flex}
       
        ${DefaultBoxIcon}
        
        font-size:1.5rem;
        border-radius:.5rem;
        color:${(prop)=>prop.theme.colors.p};
      

        @media(${device.mobile}){
          
            font-size:1.6rem;
            margin-right:2rem;
        }
        @media(${device.labtop}){
           
            ${DefaultSupTitle}
            padding:.5rem 1rem;

            span {
                margin-left:.5rem;
            }
        }
`
