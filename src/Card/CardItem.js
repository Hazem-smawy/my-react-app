import {CardItemContainer,ItemImg,ItemText,ItemOption} from './Card.style'
import {useState} from 'react'
import {MdDeleteOutline} from 'react-icons/md'

const CardItem = ({data}) => {
    const [counter,setCounter] = useState(1);
    const {name,image,price} = data;
  return (
    <CardItemContainer>
        <ItemImg>
            <img  src={image} alt={name} />
        </ItemImg>
        <ItemText>
           
            <h3>{name} </h3>
            <h4>{price}</h4>
            <div>
                <span onClick={()=>setCounter(counter - 1)}>-</span>
                <span> {counter} </span>
                <span onClick={()=>setCounter(counter + 1)}>+</span>
            </div>
        </ItemText>
        <ItemOption>
           <span><MdDeleteOutline /></span>
        </ItemOption>
    </CardItemContainer>
  )
}

export default CardItem