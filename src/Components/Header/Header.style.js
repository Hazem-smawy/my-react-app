import styled from 'styled-components'
import { Flex,DefaultBtn,DefaultBox } from '../../styles/Theme'

export const HeaderContent = styled.header`
    ${Flex}
    padding:1rem;
    margin:0rem .3rem 1rem;
    color:${(prop)=>prop.theme.colors.black};
    font-size:1.3rem;
    
`
export const Logo = styled.div`
padding: 0.5rem;
border-radius: 0.3rem;
width: 40px;
height: 40px;
${DefaultBox}

`
export const App = styled.nav`
    padding: 0.5rem;
    border-radius: 0.3rem;
    background-color: #eee;
    width: 40px;
    height: 40px;
    ${DefaultBox}

    .open {
        display:none;
    }

`
export const SideBar = styled.div`
    &.active {
        transition: .3s cubic-bezier(0.55, 0.05, 0.48, 1.23) ;
        width:65%;
        height:100vh;
        opacity:1;
    }
    opacity:0;
    overflow:hidden;
    transition: .3s cubic-bezier(0.55, 0.05, 0.48, 1.23);
    position:fixed;
    width:0;
    left:0;
    top:0;
    border-radius:1rem;
    z-index:2;
    ${DefaultBox}
    
    ul {
        padding:1.5rem;
        width:100%;
        height:100%;
        position:relative;
        h4,h5 {
            font-weight:normal;
        }

        
        .user {
            display:flex;
            margin:2rem 0 1rem;
            align-items:center;
            img {
                width:40px;
                height:40px;
                border-radius:50%;
    
            }
    
            div {
                flex:1;
                font-family:'c';
                margin-left:1rem;
    
               
                h4 {
                    font-size:1.2rem;
                    color:${(prop)=>prop.theme.colors.black};
                }
                p {
                    margin-top:-.3rem;
                    font-size:.8rem;
                    color:${(prop)=>prop.theme.colors.p};
                }
            }
        }
        li {
            ${Flex}
            font-size:.9rem;
            font-weight:normal;
            margin:1rem .3rem;
            font-family:'m';
            list-style:none;
          
            color:${(prop)=>prop.theme.colors.p};
            
            span {
                margin-left:.5rem;
            }
    
            &.logOut {
                position:absolute;

                bottom:2.5rem;
                color:red;
            }
    
            &:hover {
                color:${(prop)=>prop.theme.colors.first};
            }
        }
    
        .fav {
                position:relative;
                background-color:${(prop)=>prop.theme.colors.white};
                border-radius:1rem;
                padding:1rem .5rem 2rem;
                font-family:'g';

                div {
                    margin-top:1rem;
                    display:flex;
                    align-items:center;
        
                    img {
                        width:30px;
                        height:30px;
                        border-radius:50%;
                        margin-right:.5rem;
                    }
                    h5 {
                        flex:1;
                        font-size:.9rem;
                        color:${(prop)=>prop.theme.colors.black};
                    }
                }
                button {
                    ${DefaultBtn}
                    ${Flex}
                    font-family:'c';
                    padding:.5rem .7rem;
                    color:${(prop)=>prop.theme.colors.black};
                   
                    border-radius:.5rem;
                    
                    position:absolute;
                    bottom:-1.25rem;
                    left:50%;
                    transform:translateX(-50%);
                    .icon {
                        font-size:1.3rem;
                    }
                    span {
                        margin-right:.2rem;
                    }
                }
            }
   
       
    }

`
