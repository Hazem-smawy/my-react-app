import {Container,Header,Logo,App,TextTitle,Categories,CatItem} from './Home.styles'
import {RiApps2Line,RiMagicLine} from 'react-icons/ri'
import {SiToyota,SiBmw,SiMercedes,SiTesla,SiRenault} from 'react-icons/si'
import { NavLink } from 'react-router-dom' 
import NewItems from '../Components/NewItems/NewItems'
import  Slide  from '../Components/SlideBox'
const Home = () => {

  
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
          <Slide />
          <NewItems />
      </Container>
    </>
  )
}

export default Home