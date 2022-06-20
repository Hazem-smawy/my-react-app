import {Container} from '../Home/Home.styles'
import { Title,Icons } from '../Products/Products.style'
import {LoginText,Form,FormContainer,Forget} from './LoginSign.style'
import Img from '../assets/images/fer.jpg'
import {MdLogin,MdOutlineEmail,MdLockOutline,MdOutlinePhone} from 'react-icons/md'
import {FaAngleLeft} from 'react-icons/fa'
import {GoSignIn} from 'react-icons/go'
import {AiOutlineUser} from 'react-icons/ai'
import {BsEye} from 'react-icons/bs'
import { Link } from 'react-router-dom'
import Footer from '../Components/Footer/Footer'

const Sign = () => {
  return (
    <Container>
         <Title>
            <Icons>
                <Link to='/'>
                    <span>
                        <FaAngleLeft />
                    </span>
                </Link>
                  
                    <h4>Sign</h4>
                <Link to='/login'>
                    <span>
                        <MdLogin />
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
                    <AiOutlineUser />
                    <input  type='text'
                            placeholder='inter you name'
                            name='name'
                        />
                </div>
                <div>
                    <MdOutlineEmail />
                    <input  type='email'
                            placeholder='inter you email'
                            name='email'
                        />
                </div>
                <div>
                    <MdLockOutline />
                    <input  type='password'
                            placeholder='inter you password'
                            name='password'
                    />
                    <BsEye />
                    
                </div>
                <div >
                    <MdLockOutline />
                    <input  type='password'
                            placeholder='confirm you password'
                            name='password2'
                    />
                    <BsEye />
                    
                </div>
                <div>
                    <MdOutlinePhone />
                    <input  type='text'
                            placeholder='inter you number'
                            name='number'
                        />
                </div>
                <div>
                    <GoSignIn />
                    <input  type='submit'
                            value='submit'
                        />
                </div>
               
            </form>
           
        </Form>
        <Forget>
            <p>have account</p>
            <Link to='/login'>
                <p>login</p>
            </Link>
        </Forget>
        </FormContainer>
        <Footer />
    </Container>
  )
}

export default Sign