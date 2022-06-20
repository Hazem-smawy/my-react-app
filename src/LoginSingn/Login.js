import {Container} from '../Home/Home.styles'
import { Title,Icons } from '../Products/Products.style'
import {LoginText,Form,FormContainer,Forget} from './LoginSign.style'
import Img from '../assets/images/fer.jpg'
import {MdLogin,MdOutlineEmail,MdLockOutline} from 'react-icons/md'
import {FaAngleLeft} from 'react-icons/fa'
import {GoSignIn} from 'react-icons/go'
import {BsEyeSlash,BsEye} from 'react-icons/bs'
import Footer from '../Components/Footer/Footer'
import { Link } from 'react-router-dom'
const Login = () => {
  return (
    <Container>
         <Title>
            <Icons>
                <Link to='/'>
                    <span>
                        <FaAngleLeft />
                    </span>
                </Link>
                    <h4>login</h4>
                <Link to='/sign'>
                    <span>
                        <GoSignIn />
                    </span>
                </Link>
                   
            </Icons>
        </Title>
        <FormContainer>
        <LoginText>
            <img src={Img} alt="login page" />
            <h3>
                hellow
            </h3>
            <p>hello im your ecommerce please enter your info to inter the card</p>
        </LoginText>
        <Form>
            <form>
                <div>
                    <MdOutlineEmail />
                    <input  type='email'
                            placeholder='inter you email'
                            name='email'
                        />
                </div>
                <div className='password'>
                    <MdLockOutline />
                    <input  type='password'
                            placeholder='inter you passwrd'
                            name='password'
                    />
                    <BsEye />
                    
                </div>
                <div>
                    <MdLogin />
                    <input  type='submit'
                            value='submit'
                        />
                </div>
               
            </form>
           
        </Form>
        <Forget>
            <Link to='/sign'>
                <p>sing in</p>
            </Link>
            
            <p>forget passwrod</p>
        </Forget>
        </FormContainer>
        <Footer />
    </Container>
  )
}

export default Login