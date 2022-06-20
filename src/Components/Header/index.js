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
import {FaFirefox} from 'react-icons/fa'
import {CgMenuRight} from 'react-icons/cg'
import { Link } from 'react-router-dom'
const Header = ({isClose,setIsClose}) => {
  return (
    <HeaderContent>
        <Logo>
            <FaFirefox />
        </Logo>
        <App>
           
             <CgMenuRight className={ isClose && 'open'} onClick={()=> setIsClose(true) } />
             <IoMdClose className={ !isClose && 'open'}  onClick={()=> setIsClose(false)} />
           
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
                     <Link to='/'>
                        <GoHome />
                        <span>Home</span>
                     </Link>
                    </li>
                    <li>
                      <Link to='/card'>
                        <AiOutlineCreditCard />
                        <span>card</span>
                      </Link>
                    </li>
                    <li>
                        <MdElectricCar />
                        <span>new</span>
                    </li>
                    <li>
                        <Link to='/login'>
                            <MdLogin />
                            <span>log in</span>
                        </Link>
                    </li>
                    <li>
                        <GiSettingsKnobs />
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
                           <span>addproduct</span>
                       </button>
                    </div>
                    <li className='logOut'>
                        <MdLogout />
                        <span>log out</span>
                    </li>
                </ul>
            </SideBar>
        </App>
    </HeaderContent>
  )
}

export default Header