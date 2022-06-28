import { ItemBox,ItemImage,ItemText,Love,AddIcon } from "./NewItems.style"
import {MdAdd,MdOutlineBookmarkAdded} from 'react-icons/md'
import {AiOutlineLike,AiOutlineStar} from 'react-icons/ai'
import {RiHeartFill} from 'react-icons/ri'
import { IoHeartDislikeSharp } from "react-icons/io5"
import { Link } from "react-router-dom"
import {AiOutlineWhatsApp} from 'react-icons/ai'

import { useState } from "react"
const NewItem = ({item}) => {
  const [add,setAdd] = useState(false)
  const [love,setLove] = useState(false)
  const {id,name,image,price ,description,rate,like} = item;
  return (
    <ItemBox id ={id}>
        <Love>
          {love ? <IoHeartDislikeSharp onClick={()=>setLove(false)} /> :<RiHeartFill  onClick={()=>setLove(true)} />}
        </Love>
        <ItemImage>
            <Link to={`/product/${id}`}>
              <img src={image} alt={name} />
            </Link>  
        </ItemImage>
        <ItemText>
          <div className='titleAndIcon'>
            <div className="title">
                  <h2>{name}</h2>
                  <h3>${price}</h3>
                
            </div>
           
            <div className="icons">
               
                <div className='star'>
                  <AiOutlineStar className="icon " />
                  <span>{rate}</span>
                </div>
                <div className="like">
                  <AiOutlineLike  className="icon "/>
                  <span>{like}</span>
                </div>
                <div className="what">
                  <AiOutlineWhatsApp  />
                </div>
            </div>
          </div> 
            
           
           <AddIcon>
           <div>
                < br />
                <p>{description}</p>
                
            </div>
            <div  className='addIcon'>
                { add ? <MdOutlineBookmarkAdded className='added' onClick={()=>setAdd(false)} /> : <MdAdd className='add' onClick={()=>setAdd(true)}/>}
             </div>
           </AddIcon>
         
           
        </ItemText>
    </ItemBox>
  )
}

export default NewItem