import {Bollets,SlidersBox,FirstCol,Sliders,Slide,SlideImage,TextBox} from './Slide.style'
import image from '../../assets/images/fer.jpg'
import { Link } from 'react-router-dom'
const index = () => {
    let links =[
        {id:1,name:'Fav'},
        {id:2,name:'new'},
        {id:3,name:'famuas'},
      ]
  return (
    <SlidersBox>
            <FirstCol>
              <div>
                <li >
                  <Link to='/products'>
                   liked
                  </Link>
                </li>
                <li >
                  <Link to='/products'>
                   new
                  </Link>
                </li>
                <li className='active' >
                  <Link to='/products'>
                   favo
                  </Link>
                </li>
              </div>
            </FirstCol>
            <Sliders>
                <Slide>
                  <SlideImage>
                      <img src={image} alt="products" />
                  </SlideImage>
                  <TextBox>
                    <div>
                      <h3>sub Title </h3>
                      <p>Some Descriptin here </p>
                    </div>
                    <button>
                      Vist
                    </button>
                  </TextBox>
              </Slide>
              <Bollets>
                <li className='active'></li>
                <li></li>
                <li></li>
                <li></li>
              </Bollets>
            </Sliders>
          </SlidersBox> 
  )
}

export default index