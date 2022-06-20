import { ItemBox,ItemImage,ItemText,Love,AddIcon } from "./NewItems.style"
import {MdAdd} from 'react-icons/md'
import {AiOutlineLike,AiOutlineStar} from 'react-icons/ai'
import {RiHeartFill} from 'react-icons/ri'
import { Link } from "react-router-dom"
const NewItem = ({item}) => {
  const {name,image,price ,description,rate,like} = item;
  return (
    <ItemBox>
        <Love>
          <RiHeartFill />
        </Love>
        <ItemImage>
            <Link to='/product'>
              <img src={image} alt={name} />
            </Link>  
        </ItemImage>
        <ItemText>
           <div>
                <h2>{name}</h2>
                <h3>${price}</h3>
                <br />
                <p>{description}</p>
           </div>
           
           <div>
              <div className='star'>
                <AiOutlineStar className="icon " />
                <span>{rate}</span>
              </div>
              <div className="like">
                <AiOutlineLike  className="icon "/>
                <span>{like}</span>
              </div>
           </div>
           <Link to='/card'>
           <AddIcon>
             <MdAdd />
           </AddIcon>
           </Link>
           
        </ItemText>
    </ItemBox>
  )
}

export default NewItem