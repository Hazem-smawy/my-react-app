import {Container,NewData,TextTitle} from './Home.styles'
import Spinner from '../Components/Spinner/index'
import Header from '../Components/Header/index'
import NewItems from '../Components/NewItems/NewItems'
import  Category  from '../Components/CatItms'
import  SlideShow  from '../Components/SlideBox/SlideShow'
import Footer from '../Components/Footer/Footer'
import {useState} from 'react'
import {cars} from '../data'
import SlideLabtop from '../Components/SlideLabtop/SlideLabtop'
const Home = ({taggleTheme,setTaggleTheme}) => {
  const [closeSideBar,setCloseSideBar]= useState(false);
 
  return (
    <>
        <Header className='phone' taggleTheme={taggleTheme} setTaggleTheme={setTaggleTheme} isClose={closeSideBar} setIsClose={setCloseSideBar} />
        <div className='labtop'>
            <Header taggleTheme={taggleTheme} setTaggleTheme={setTaggleTheme} isClose={closeSideBar} setIsClose={setCloseSideBar} />
            <SlideLabtop />
           
            <Category /> 
        </div>
        <Container onClick={()=> closeSideBar  && setCloseSideBar(false)}
          className={closeSideBar ? "active":" "}>
            <div className='phone'>
         

            <Category /> 
            </div>
          
          <TextTitle>
            <h2>Descover</h2>
            <p>All Your Fav is Here</p>
          </TextTitle> 
          <SlideShow />
          <NewData>
            <h3>new cars</h3>
          </NewData>
          <NewItems data={cars} />
          <Footer />
          
      </Container> 
    </>
  )
}

export default Home