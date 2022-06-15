import { ItemBox,ItemImage,ItemText,Love,AddIcon } from "./NewItems.style"
import {MdAdd} from 'react-icons/md'
import {AiOutlineLike,AiOutlineStar} from 'react-icons/ai'
import {RiHeartFill} from 'react-icons/ri'
const NewItem = ({data}) => {
  return (
    <ItemBox>
        <Love>
          <RiHeartFill />
        </Love>
        <ItemImage>
            <img src={data.image} alt={data.id} />
        </ItemImage>
        <ItemText>
           <div>
                <h3>{data.name}</h3>
                <h2>$100</h2>

                <p>{data.description}</p>
           </div>
           
           <div>
              <div className='star'>
                <AiOutlineStar className="icon " />
                <span>4.5</span>
              </div>
              <div className="like">
                <AiOutlineLike  className="icon like"/>
                <span>100</span>
              </div>
           </div>
           <AddIcon>
             <MdAdd />
           </AddIcon>
        </ItemText>
    </ItemBox>
  )
}

export default NewItem