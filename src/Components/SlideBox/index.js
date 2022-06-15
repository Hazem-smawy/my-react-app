import {Bollets,SlidersBox,FirstCol,Sliders,Slide,SlideImage,TextBox} from './Slide.style'
import image from '../../assets/images/fer.jpg'
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
                  liked
                </li>
                 <li>
                   new
                 </li>
                 <li className='active'>
                   famuas
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