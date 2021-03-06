
import {BrowserRouter, Routes,Route} from 'react-router-dom'
import Home from './Home';
import Product from './Product/Product';
import Products from './Products/Products';
import Login from './LoginSingn/Login'
import Sign from './LoginSingn/Sign';
import Card from './Card/Card'



const Main = ({taggleTheme,setTaggleTheme}) => {
  return (
    <BrowserRouter>
     <Routes>
             
             <Route path='/' element={<Home taggleTheme={taggleTheme} setTaggleTheme={setTaggleTheme} />} />
             <Route path='products' element={<Products />} />
             <Route path='product/:id' element={<Product />} />
             <Route path='login' element={<Login />} />
             <Route path='sign' element={<Sign />} />
             <Route path='card' element={<Card />} />
             
          </Routes> 
    </BrowserRouter>
  )
}

export default Main