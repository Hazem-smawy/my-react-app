import './styles/globals.css'
import Theme from './styles/Theme'
import { ThemeProvider } from 'styled-components';

import {BrowserRouter, Routes,Route} from 'react-router-dom'

import Home from './Home';
import Product from './Product/Product';
import Products from './Products/Products';
import Login from './LoginSingn/Login'
import Sign from './LoginSingn/Sign';
import Card from './Card/Card'
function App() {
  return (
    <BrowserRouter>
      <ThemeProvider theme={Theme}>
         
            <Routes>
             
              <Route path='/' element={<Home />} />
              <Route path='products' element={<Products />} />
              <Route path='product' element={<Product />} />
              <Route path='login' element={<Login />} />
              <Route path='sign' element={<Sign />} />
              <Route path='card' element={<Card />} />
              
           </Routes> 
       
      </ThemeProvider>
      </BrowserRouter> 
  );
}

export default App;
