import {Slide,SlideImage,TextBox} from './Slide.style'

const SlideItem = ({data}) => {
    const {name,image} = data;
  return (
  
    <Slide>
        <SlideImage>
            <img src={image} alt={name} />
        </SlideImage>
        <TextBox>
            <div>
                <h3>{name} </h3>
                <p>some description</p>
            </div>
            <button>
                go now
            </button>
        </TextBox>
    </Slide>
  )
}

export default SlideItem