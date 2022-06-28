import  {HeaderContent,Logo,App,SideBar} from './Header.style'
import Img from '../../assets/images/about.jpg'
import Img1 from '../../assets/images/testimonial1.jpg'
import Img2 from '../../assets/images/testimonial2.jpg'
import Img3 from '../../assets/images/testimonial3.jpg'
import {MdAdd} from 'react-icons/md'
import {GoHome} from 'react-icons/go'
import {GiSettingsKnobs} from 'react-icons/gi'
import {AiOutlineCreditCard} from 'react-icons/ai'
import {MdElectricCar,MdLogin,MdLogout} from 'react-icons/md'
import {IoMdClose} from 'react-icons/io'
import {FaFirefox,FaSun} from 'react-icons/fa'
import {CgMenuRight} from 'react-icons/cg'
import {BiMoon} from 'react-icons/bi'
import { NavLink } from 'react-router-dom'
const Header = ({taggleTheme,setTaggleTheme,isClose,setIsClose}) => {
  return (
    <HeaderContent>
        <Logo>
            <FaFirefox />
        </Logo>
        <App>
           
             <CgMenuRight className={ isClose && 'open'} onClick={()=> setIsClose(true) } />
             <IoMdClose className={ !isClose && 'open'}  onClick={()=> setIsClose(false)} />
        </App>
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
                    <NavLink className={({isActive})=> isActive ? "link active" : 'link'}  to='/'>
                    <GoHome className='dIcon' />
                    <span>Home</span>
                    </NavLink>
                </li>
                <li>
                    <NavLink className={({isActive})=> isActive ? "link active" : 'link'}   to='/card'>
                    <AiOutlineCreditCard className='dIcon' />
                    <span>card</span>
                    </NavLink>
                </li>
                <li>
                    <MdElectricCar  className='dIcon'/>
                    <span>new</span>
                </li>
                <li>
                    <NavLink className={({isActive})=> isActive ? "link active" : 'link'}   to='/login'>
                        <MdLogin  className='dIcon' />
                        <span>log in</span>
                    </NavLink>
                </li>
                <li>
                    <GiSettingsKnobs  className='dIcon' />
                    <span>settings</span>
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
                        <span>add product</span>
                    </button>
                </div>
                <li className='logOutTheme'>
                    
                    <NavLink className='logOut' to='/login'>
                        <MdLogout />
                        <span>log out</span>
                    </NavLink>
                    <div className='theme'>
                        {taggleTheme 
                            ? <p onClick={()=>setTaggleTheme(false)} >
                                <FaSun  /><span>light</span>
                            </p>
                            : <p onClick={()=>setTaggleTheme(true)}>
                                <BiMoon />
                                <span>dark</span>
                            </p>
                        }
                        
                    </div>
                </li>

            </ul>
        </SideBar>
        
    </HeaderContent>
  )
}

export default Header