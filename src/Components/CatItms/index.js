import {Categories,CatItem} from './CatItems.style'
import {SiToyota,SiBmw,SiMercedes,SiTesla,SiRenault} from 'react-icons/si' 
import { Link } from 'react-router-dom'
const Category = () => {
  return (
    <Categories>
                <CatItem >
                  <Link to='/products'>
                    <SiBmw className='active' />
                  </Link>
               
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
  )
}

export default Category