import {ItemsContainer}from './NewItems.style'
import NewItem from './NewItem';
import { Link } from 'react-router-dom';

const NewItems = ({data}) => {
  return ( 
           <ItemsContainer>
                {
                    data.map(item=>(
                      <Link to='/product' key={item.id} >
                          <NewItem  item={item} />
                      </Link>
                       
                    ))
                }
           </ItemsContainer>
  )
}

export default NewItems