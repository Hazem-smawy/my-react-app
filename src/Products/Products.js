import { Container } from "../Home/Home.styles"
import {Title,Icons} from './Products.style'
import {FaAngleLeft} from 'react-icons/fa'
import {GiShoppingBag} from 'react-icons/gi'
import Footer from '../Components/Footer/Footer'
import NewItems from '../Components/NewItems/NewItems'
import {cars} from '../data'
import {Link} from 'react-router-dom'
const Products = () => {
  return (
    <Container>
        <Title>
            <Icons>
                   <Link to='/'>
                    <span>
                        <FaAngleLeft />
                    </span>
                    </Link>
                    <h4>cat name</h4>
                 
                        <span>
                            <GiShoppingBag />
                        </span>
                   
                   
                </Icons>
        </Title>
            <NewItems data={cars}/>
        <Footer />
    </Container>
  )
}

export default Products