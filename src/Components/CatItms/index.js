import {Categories,CatItem} from './CatItems.style'
import {SiToyota,SiBmw,SiMercedes,SiTesla,SiRenault} from 'react-icons/si' 
import { Link } from 'react-router-dom'
const Category = () => {
  return (
    <Categories>
                <Link to='/products'>
                  <CatItem className='active'>
                      <SiBmw  />
                      <span>BMW</span>
                  </CatItem>
                </Link>
                <CatItem >
                  <SiMercedes />
                  <span>Mercedes</span>
                </CatItem>
                <CatItem >
                  <SiTesla />
                  <span>Tesla</span>
                </CatItem>
                <CatItem >
                  <SiToyota />
                  <span>Toyota</span>
                </CatItem>
                <CatItem >
                  <SiRenault />
                  <span>Renault</span>
                </CatItem>
              
          </Categories>
  )
}

export default Category