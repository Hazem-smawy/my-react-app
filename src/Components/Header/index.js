import  {HeaderContent,Logo,App,SideBar} from './Header.style'
import {RiApps2Line,RiMagicLine} from 'react-icons/ri'
import Img from '../../assets/images/about.jpg'
import Img1 from '../../assets/images/testimonial1.jpg'
import Img2 from '../../assets/images/testimonial2.jpg'
import Img3 from '../../assets/images/testimonial3.jpg'
import {MdAdd} from 'react-icons/md'
import { useState } from 'react'
const Header = ({isClose,setIsClose}) => {
  
    
  
   
  return (
    <HeaderContent>
        <Logo>
            <RiMagicLine />
        </Logo>
        <App>
            <RiApps2Line onClick={()=>(
                isClose ? setIsClose(false):setIsClose(true)
            )} />
            <SideBar className={ isClose ?'active':''} >
                <ul>
                    <div className='user'>
                        <img src={Img} alt="car"/>
                        <div>
                            <h4>User Name</h4>
                            <p>hazemsmawy@gmail.com</p>
                        </div>
                    </div>
                    <li>
                        <RiMagicLine />
                        <span>Home</span>
                    </li>
                    <li>
                        <RiMagicLine />
                        <span>cart</span>
                    </li>
                    <li>
                        <RiMagicLine />
                        <span>new</span>
                    </li>
                    <li>
                        <RiMagicLine />
                        <span>log in</span>
                    </li>
                    <li>
                        <RiMagicLine />
                        <span>Home</span>
                    </li>
                    <div className='fav'>
                       <div>
                           <img src={Img1} alt="car"/>
                           <h5>Mercedes</h5>
                       </div>
                       <div>
                           <img src={Img2} alt="car"/>
                           <h5> BMW</h5>
                       </div>
                       <div>
                           <img src={Img3} alt="car"/>
                           <h5>Tesla</h5>
                       </div>

                       <button>
                           <MdAdd className='icon' />
                           <span>addproduct</span>
                       </button>
                    </div>
                    <li className='logOut'>
                        <RiMagicLine />
                        <span>log out</span>
                    </li>
                </ul>
            </SideBar>
        </App>
    </HeaderContent>
  )
}

export default Header