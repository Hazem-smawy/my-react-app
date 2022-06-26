import {Bollets,SlidersBox,FirstCol,Sliders,SlidersBtn} from './Slide.style'
import {SlideData} from '../../data'
import SlideItem from './SlideItem'
import { Link } from 'react-router-dom'
import {useState} from 'react'
import {FaAngleLeft,FaAngleRight} from 'react-icons/fa'
const SlideShow = () => {
  const data= SlideData;
  const [pos,setPos]= useState(0);
  
 
  const nextSlide = ()=>{
    pos < data.length - 1 ? setPos(pos + 1): setPos(0);
  }
  const prevSlide = ()=>{
    pos > 0 ? setPos(pos - 1): setPos(data.length - 1);
  }
  return (
    <SlidersBox>
            <FirstCol>
              <div>
                <li >
                  <Link to='/products'>
                   liked
                  </Link>
                </li>
                <li >
                  <Link to='/products'>
                   new
                  </Link>
                </li>
                <li className='active' >
                  <Link to='/products'>
                   favo
                  </Link>
                </li>
              </div>
            </FirstCol>
            <Sliders>
              <SlidersBtn>
                <FaAngleLeft onClick={prevSlide} className='left'/>
                <FaAngleRight onClick={nextSlide} className='right' />
              </SlidersBtn>
              <SlideItem data={data[pos]} />
             
              
              <Bollets>
               {data.map((e,i)=>(
                 <li key={i} className={pos === i  ?"active":''}
                      onClick={()=>setPos(i)}
                 >

                 </li>
               ))}
              </Bollets>
            </Sliders>
          </SlidersBox> 
  )
}

export default SlideShow
