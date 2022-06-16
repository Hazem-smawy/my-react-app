import {Categories,CatItem} from './CatItems.style'
import {SiToyota,SiBmw,SiMercedes,SiTesla,SiRenault} from 'react-icons/si' 
const Category = () => {
  return (
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
  )
}

export default Category