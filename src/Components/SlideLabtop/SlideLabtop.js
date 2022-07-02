import  {  useEffect, useRef, useState } from 'react'
import {SlideSpans,Control,SlideContainer,SlideBtn,SlideText,ImageBox,SlideImg} from './SlideLabtop.style'
import {SlideData} from '../../data'
import {FaAngleLeft,FaAngleRight} from 'react-icons/fa'
import { AiOutlineLike,AiOutlineStar} from 'react-icons/ai'

const SlideLabtop = () => {
    let interval = useRef(null);

    let le = SlideData.length;
    const [pos,setPos]= useState(1);
    let [width,setWidth] =useState(0)
 
    let data = SlideData[pos - 1]

 
 
    
  
  
    const nextSlide=()=>{
        console.log('next')
        setTimeout(()=>{
            clearInterval(interval.current)
        },5000)
        pos < le  ? setPos(pos + 1):setPos(1);
    }
  
    const prevSlide =()=>{
        pos > 1 ? setPos(pos - 1 ):setPos(le);
        
       
  
    }
// 0   800   600   400  200  0
// 0  -200   600   400  200  0  
// 0  -200  -400   400  200  0
// 0  -200  -400  -600  200  0
 let startTrans =(pos,i)=> {
    let returnStart = 0;
    
    if(pos == 2){
        i == 0  ? returnStart = 3 * 225 : returnStart = -225  ;
    }else if(pos == 3){
        i == 0 || i == 1 ? returnStart =  2 * 225 : returnStart = 2 * -225;
    }else if(pos === 4){
        i == 3 ? returnStart =  3 * -225 : returnStart =  225;
    }else {
        returnStart = 225 ;
    }

return returnStart;

 }

 const callLastTrans = (pos ,i )=>{

    let returnLast;
        if(pos == 1 ){
           i == 0 ?  returnLast = 3 * 225  : returnLast = -225;
        }else if(pos == 2){
            i == 0 || i == 1 ? returnLast = 2 * 225 :returnLast = -450 ;
        }else if(pos == 3){
            i == 3 ? returnLast = 3 * - 225 : returnLast = 225;
        }else {
            returnLast = 0
        }
    return returnLast;
 }
 

 useEffect(()=>{

    interval.current =  setInterval(()=>{
    pos < le  ? setPos(pos + 1):setPos(1);
   },3000)

   return ()=> clearInterval(interval.current)
 },[pos])


  return (
    <SlideContainer back={data.image}>
        <span className='top'>

        </span>
        <SlideImg>
            {
                SlideData.map((e,i) =>(

                    <ImageBox onClick={()=>setPos(i + 1)}
                            className={pos == i + 1 ?"active":''}
                            tr={ startTrans(pos,i)}
                            last={callLastTrans(pos,i)}
                            key={i} back={e.image}
                    >
                        <div>
                            <div className='title'>
                                <h4>{e.name}</h4>
                                <div>
                                    <div className='star'>
                                        <AiOutlineStar className="icon " />
                                        <span>{e.rate}</span>
                                    </div>
                                    <div className="like">
                                        <AiOutlineLike  className="icon "/>
                                        <span>{e.like}</span>
                                    </div>
                                </div>
                            </div>
                            <p>{e.description}</p>
                        </div>
                    </ImageBox>
                ))
            }

        </SlideImg>
        <SlideText tr = {50 } tv = {-50 }>
            <h3>{data.name}</h3>
            <p>{data.description}</p>
            <button>click now</button>

        </SlideText>
        <SlideBtn>
            <Control>
                <span onClick={()=>prevSlide()}  >
                    <FaAngleLeft /> 
                </span>
                <span  onClick={()=>nextSlide()} >
                    <FaAngleRight />
                </span>
            </Control>
            <SlideSpans  width= { pos / SlideData.length  * 100}>
            
            </SlideSpans>
            <div className='count'>
                0 {pos}
            </div>
        </SlideBtn>
        
    </SlideContainer>
  )
}

export default SlideLabtop