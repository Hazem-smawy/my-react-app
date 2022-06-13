import {Container,Header,Logo,App,TextTitle,Categories,LinkItem,CatItem,SlidersBox,FirstCol,Sliders,Slide,SlideImage,TextBox} from './Home.styles'
import {RiApps2Line,RiMagicLine} from 'react-icons/ri'
import {SiToyota,SiBmw,SiMercedes,SiTesla,SiRenault} from 'react-icons/si'
import { NavLink } from 'react-router-dom' 
import image from '../assets/images/fer.jpg'
import NewItems from '../Components/NewItems/NewItems'
const Home = () => {
  let links =[
    {id:1,name:'Fav'},
    {id:2,name:'new'},
    {id:3,name:'famuas'},
  ]
  
  return (
    <>
     <Header>
            <Logo>
                <RiMagicLine />
            </Logo>
            <App>
                <RiApps2Line />
            </App>
      </Header>
       <Container>
        
          <TextTitle>
            <h2>Descover</h2>
            <p>All Your Fav is Here</p>
          </TextTitle>
          <Categories>
                <CatItem >
                  <SiBmw />
                </CatItem>
                <CatItem >
                  <SiMercedes />
                </CatItem>
                <CatItem >
                  <SiTesla />
                </CatItem>
                <CatItem >
                  <SiToyota />
                </CatItem>
                <CatItem >
                  <SiRenault />
                </CatItem>
              
          </Categories>
          <SlidersBox>
            <FirstCol>
              <div>
                {
                  links.map(l=>(
                    <LinkItem key={l.id}>
                      {/* <NavLink to="#" >                     
                          {l.name} 
                      </NavLink> */}
                      <li> hello</li>
                    </LinkItem>
                   
                  ))
                }
              
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
            </Sliders>
          </SlidersBox> 
          <NewItems />
      </Container>
    </>
  )
}

export default Home