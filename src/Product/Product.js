import { Container } from "../Home/Home.styles"
import {ProductBox,ImageBox,Icons,NameLove,Properaties,Related,Description,AddToCard} from './Product.style'
import {MdAdd} from 'react-icons/md'
import {FaAngleLeft} from 'react-icons/fa'
import {GiShoppingBag} from 'react-icons/gi'
import {AiOutlineLike,AiOutlineStar} from 'react-icons/ai'
import {RiHeartFill} from 'react-icons/ri'
import { cars } from "../data"
const Product = () => {

    const {name,description,image,price,rate,like} = cars[3];
  return (
    <Container>
        <ProductBox>
        <ImageBox>
            <img src={image} alt={name} />
            <Icons>
                <span>
                    <FaAngleLeft />
                </span>
                <span>
                    <GiShoppingBag />
                </span>
            </Icons>
        </ImageBox>
        <NameLove>
            <h4>{name}</h4>
            <p><RiHeartFill /></p>
        </NameLove>
        <Properaties>
            <p className='star'>
                <AiOutlineStar />
                <span>{rate}</span>
            </p>
            <p  className='like'>
                <AiOutlineLike />
                <span>{like}</span> 
            </p>
        </Properaties>
        <Related>
            {
                cars.map((car)=>(
                    <img key={car.id} src={car.image} alt ={car.name} />
                ))
            }
        </Related>
        <Description>
            {description}
        </Description>
        <AddToCard>
            <h4>$ {price}</h4>
            <button>
                <MdAdd />
                <span>boy it</span>
            </button>
        </AddToCard>
        </ProductBox>
    </Container>
  )
}

export default Product