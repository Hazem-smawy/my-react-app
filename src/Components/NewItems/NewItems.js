import {ItemsContainer}from './NewItems.style'
import NewItem from './NewItem';

const NewItems = ({data}) => {
  return ( 
           <ItemsContainer>
                {
                    data.map(item=>(
                          <NewItem key={item.id} item={item} />  
                    ))
                }
           </ItemsContainer>
  )
}

export default NewItems