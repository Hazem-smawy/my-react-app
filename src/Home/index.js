import {Container,TextTitle} from './Home.styles'
import Header from '../Components/Header/index'
import NewItems from '../Components/NewItems/NewItems'
import  Category  from '../Components/CatItms'
import  Slide  from '../Components/SlideBox'
import {useState} from 'react'
const Home = () => {
  const [closeSideBar,setCloseSideBar]= useState(false);
  return (
    <>
    <Header isClose={closeSideBar} setIsClose={setCloseSideBar} />
      <Container onClick={()=> closeSideBar  && setCloseSideBar(false)}
      className={closeSideBar ?"active":" "}>
          
          <TextTitle>
            <h2>Descover</h2>
            <p>All Your Fav is Here</p>
          </TextTitle>
         <Category />
          <Slide />
          <NewItems />
          
      </Container> 
    </>
  )
}

export default Home