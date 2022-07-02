import styled from 'styled-components'
import {device, Flex,DefaultBtn,DefaultBox, DefaultTitle, DefaultP, DefaultSupTitle, DefaultSupSecond, DefaultBoxIcon } from '../../styles/Theme'

export const HeaderContent = styled.header`
    display:flex;
    justify-content:space-between;
    align-items:center;
    margin:1.5rem auto;   
    width:90vw;
    padding:0 .5rem 0;
    ${DefaultTitle}
    @media(${device.labtop}){
        position:absolute;
        left:0;
        top:0;
        width:100%;
        height:3rem;
    }
    
`
export const Logo = styled.div`
padding: 0.5rem;
border-radius: 0.3rem;
width: 40px;
height: 40px;
${DefaultBoxIcon}
${Flex}
    @media(${device.mobile}){
        width: 50px;
        height: 50px;
        
    }
    @media(${device.labtop}){
        margin-right:1rem;
    }

`
export const App = styled.nav`
    padding: 0.5rem;
    border-radius: 0.3rem;
    background-color: #eee;
    width: 40px;
    height: 40px;
    ${DefaultBoxIcon}

    .open {
        display:none;
    }

    ${Flex}
    @media(${device.mobile}){
        width: 50px;
        height: 50px;
    }
    @media(${device.labtop}){
        display:none;
    }

`
export const SideBar = styled.div`
    &.active {
        transition: .3s cubic-bezier(0.55, 0.05, 0.48, 1.23) ;
        width:65%;
        height:100vh;
        opacity:1;

        @media(${device.mobile}){
            width: 40%;
            
        }
       
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

    @media(${device.labtop}){
        height:auto;
        width:auto;
        opacity:1;
        position:static;
        flex:1;
        background:transparent;
        box-shadow:none;
        .dIcon {
            display:none;
        }
     }
    
    ul {
        padding:1.5rem;
        width:100%;
        height:100%;
        position:relative;
        
       
        @media(${device.labtop}){
           display:flex;
           justify-content:space-around;
           align-items:center;
           padding:0;
         }

        
        .user {
            display:flex;
            margin:2rem 0 1rem;
            align-items:center;

            @media(${device.labtop}){
                display:none;
            }
            img {
                width:40px;
                height:40px;
                border-radius:50%;

                @media(${device.mobile}){
                    width: 60px;
                    height: 60px;
                }
    
            }
          
    
            div {
                flex:1;
                font-family:'c';
                margin-left:1rem;

                @media(${device.labtop}){
                    display:none;
                }
               
                h4 {
                   ${DefaultSupTitle}
                   font-size:1.1rem;
                }
                p {
                   ${DefaultP}
                    
                }
            }
        }
        li {
            ${Flex}
            justify-content:flex-start;
           ${DefaultP}
            margin:1rem .3rem;
            list-style:none;
            position:relative;
         
          
            .link {
                width:100%;
                display:flex;
                align-items:center;
                justify-content:flex-start;
  
                @media (${device.labtop}){
                    padding:.5rem;
                 }
            }
            .active {
                color:${(prop)=>prop.theme.colors.first};
            }
            .active::before {
                position: absolute;
                content: '';
                width: 2px;
                height: 50%;
                left: -0.8rem;
                top: 50%;
                border-radius: 0.2rem;
                transform: translateY(-50%);
                background:${(prop)=>prop.theme.colors.first};

                @media (${device.labtop}){
                    width: 29px;
                    height: 1px;
                    left: 50%;
                    transform: translateX(-50%);
                    top: 86%;
                    bottom: 9rem;
                }
            }
            span {
                margin-left:.5rem;
            }
    
            &.logOutTheme {
                position:absolute;
                ${Flex}
                justify-content:space-between;
                bottom:3rem;
                width:75%;

                @media(${device.labtop}){
                    width:auto;
                    position:static;
                    flex-direction: row-reverse;
                    justify-content:space-around;
                    
                   .logOut ,.theme {
                        padding:.5rem;
                        font-size:1.4rem;
                   }
                   
                    span {
                        display:none;
                    }
                }
                .logOut {
                    color:red;
                    ${Flex}
                    @media (${device.labtop}){
                        border-radius:.5rem;
                        
                        color:${(prop)=>prop.theme.colors.black};
                    }
                 
                }

                .theme {
                    padding:.1rem .5rem;
                    border-radius:.4rem;
                    background:${(prop)=>prop.theme.colors.bg};
                   
                    ${DefaultP}

                    @media (${device.labtop}){
                        margin-right:2rem;
                        font-size:1.3rem;
                        padding:.5rem;
                        border-radius:.5rem;
                        background:${(prop)=>prop.theme.colors.black};
                        color:${(prop)=>prop.theme.colors.white};
                    }
                    p {
                        ${Flex}
                    }
                    &:hover {
                        background:${(prop)=>prop.theme.colors.black};
                        color:${(prop)=>prop.theme.colors.white};
                    }
                }
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
                font-family:'m';

                
                @media(${device.labtop}){
                   padding:0;
                   positin:static;
                   background-color: transparent;
                 }
                
                div {
                    margin-top:1rem;
                    display:flex;
                    align-items:center;
        
                    @media(${device.labtop}){
                        display:none;
                    }
                    
                    img {
                        width:30px;
                        height:30px;
                        border-radius:50%;
                        margin-right:.5rem;
                        
                        @media (${device.mobile}){
                            width:40px;
                            height:40px;
                        }
                    }
                    h5 {
                        flex:1;
                        ${DefaultSupSecond}
                    }
                }
                button {
                    ${DefaultBtn}
                    ${Flex}
                    padding:.5rem .7rem;
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

                        @media(${device.labtop}){
                          display:block;
                         }
                    }

                    @media(${device.labtop}){
                        bottom:auto;
                        left:auto;
                        position:static;
                        transform:translateX(0);
                        padding:.5rem;
                        background:${(prop)=>prop.theme.colors.boxSecond};
                        color:${(prop)=>prop.theme.colors.supTitle}

                     }
                }
            }
   
       
    }

`
