import { ItemBox,ItemImage,ItemText,Love } from "./NewItems.style"
import {CgShoppingBag} from 'react-icons/cg'
import {RiHeart2Line} from 'react-icons/ri'
const NewItem = ({data}) => {
  return (
    <ItemBox>
        <Love>
          <RiHeart2Line />
        </Love>
        <ItemImage>
            <img src={data.image} alt={data.id} />
        </ItemImage>
        <ItemText>
           <div>
                <h3>{data.name}</h3>
                <p>{data.description}</p>
           </div>
            <button>
               <CgShoppingBag />
            </button>
        </ItemText>
    </ItemBox>
  )
}

export default NewItem