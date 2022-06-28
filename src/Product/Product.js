import { Container } from "../Home/Home.styles"
import {Image,ProductBox,ImageBox,Icons,Details,NameLove,Properaties,Related,Description,AddToCard} from './Product.style'
import {MdAdd} from 'react-icons/md'
import {FaAngleLeft} from 'react-icons/fa'
import {GiShoppingBag} from 'react-icons/gi'
import {AiOutlineLike,AiOutlineStar} from 'react-icons/ai'
import {RiHeartFill} from 'react-icons/ri'
import { cars } from "../data"
import {Link} from 'react-router-dom'
import { useParams } from "react-router-dom"
import { useState,useEffect } from "react"
import { IoHeartDislikeSharp } from "react-icons/io5"
import Footer from '../Components/Footer/Footer'
const Product = () => {
    const {id} = useParams()
    const [love,setLove] = useState(false)

    useEffect(()=>{
        window.scrollTo(0,0);
    },[])
    const {name,description,image,price,rate,like} = cars[id-1];
  return (
    <Container>
         <Icons>
                <Link to='/'>
                    <span>
                        <FaAngleLeft />
                    </span>
                </Link>
                <Link to='/card'>
                    <span>
                        <GiShoppingBag />
                    </span>
                </Link>
               
        </Icons>
        <ProductBox>
            <ImageBox>         
                <img src={image} alt={name} />
            </ImageBox>
            <Details>
                <NameLove>
                    <h4>{name}</h4>
                    <p> {love ? <IoHeartDislikeSharp onClick={()=>setLove(false)} /> :<RiHeartFill  onClick={()=>setLove(true)} />}</p>
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
                            <Image id={car.id} key={car.id}>
                                <img  src={car.image} alt ={car.name} />
                            </Image>
                            
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
            </Details>
        </ProductBox>
        <Footer />
    </Container>
  )
}

export default Product
