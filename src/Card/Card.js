import React from 'react'
import { CardContainer,CardSummary } from './Card.style'
import { Container } from '../Home/Home.styles'
import {Title,Icons} from '../Products/Products.style'
import {FaAngleLeft} from 'react-icons/fa'
import { GoSignIn } from 'react-icons/go'
import CardItem from './CardItem'
import { cars } from '../data'
import Footer from '../Components/Footer/Footer'
import { Link } from 'react-router-dom'
const Card = () => {
  return (
    <Container>
    <Title>
      <Icons>
          <Link to='/'>
              <span>
                  <FaAngleLeft />
              </span>
          </Link>
            
          <h4>Cart</h4>
          <Link to='/login'>
              <span>
                <GoSignIn />
              </span>
          </Link>
        
          </Icons>
      </Title>
      <CardContainer >
       {cars.map(e=> (<CardItem key={e.id} data={e} />))}
      </CardContainer>
      <CardSummary>
        <div>
          <h5>total price:</h5>
          <h5>$100</h5>
        </div>
        <div>
          <h5>discount:</h5>
          <h5>30%</h5>
        </div>
        <div className='total'>
          <h5>total:</h5>
          <h5>$100</h5>
        </div>
        <button>check now</button>
      </CardSummary>
      <Footer />
    </Container>
  )
}

export default Card