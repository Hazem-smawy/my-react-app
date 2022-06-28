import styled from 'styled-components'
import {device, Flex ,DefaultBoxIcon, DefaultSupTitle} from '../../styles/Theme'
export const Categories = styled.div`
    hieght:60px;
    display:flex;
    justify-content:space-between;

    span {
        display:none;
    }
    @media(${device.mobile}){
       justify-content:flex-start;
    }

    @media(${device.labtop}){
        height:50px;
        span {
            display:block;
        }
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
            width: 60px;
            height: 60px;
            font-size:1.6rem;
            margin-right:2rem;
        }
        @media(${device.labtop}){
            height:auto;
            width:fit-content;
            ${DefaultSupTitle}
            padding:.5rem 1rem;

            span {
                margin-left:.5rem;
            }
        }
`
