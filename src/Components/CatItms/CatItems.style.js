import styled from 'styled-components'
import { Flex ,DefaultBox} from '../../styles/Theme'
export const Categories = styled.div`
    hieght:60px;
    display:flex;
    justify-content:space-between;;
    
`
export const CatItem = styled.div`
        ${Flex}
        margin-right:.5rem;
        height:50px;
        width:50px;
        ${DefaultBox}
        
        font-size:1.5rem;
        border-radius:.5rem;
        color:${(prop)=>prop.theme.colors.p};
        .active {
            color:${(prop)=>prop.theme.colors.black};
        }
`
