
import { FooterContainer,LinkBox,Info,Media,Links,CopyRight } from "./Footer.style"
import {MdOutlinePhone,MdEmail} from 'react-icons/md'

import {IoLocationOutline} from 'react-icons/io5'
import {AiOutlineFacebook,AiOutlineInstagram,AiOutlineWhatsApp,AiOutlineTwitter,AiOutlineCopyright} from 'react-icons/ai'

import Img from '../../assets/images/fer.jpg'

const Footer = () => {
  return (
    <FooterContainer>
        <LinkBox>
            <Info>
                <img src={Img} alt='footer logo'/>
                <div>
                    <h4>Company name</h4>
                    <p>this where Company description here and descripte the company work</p>

                </div>
            </Info>
            <Media>
                <div className="location">
                    <p>
                        <IoLocationOutline />
                        <span>Yemen ,Ibb, Aladin street</span>
                    </p>
                    <p>
                        <MdOutlinePhone />
                        <span>00967 775 426 836</span>
                    </p>
                    <p>
                        <MdEmail />
                        <span>hazemsmawy@gmail.com</span>
                    </p>
                      
                </div>
                <div className="social">
                    <AiOutlineWhatsApp />
                    <AiOutlineFacebook />
                    <AiOutlineInstagram />
                    <AiOutlineTwitter />

                </div>
            </Media>
            <Links>
                <p>Home</p>
                <p>new products</p>
                <p>more sell</p>
                <p>sign in</p>
            </Links>
        </LinkBox>
        <CopyRight>
            <p>all copy rights for name 2022</p>
            <AiOutlineCopyright />
        </CopyRight>
       
    </FooterContainer>
  )
}

export default Footer