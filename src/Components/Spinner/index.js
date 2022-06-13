
import { Text,Container,DescriptionCaption,FirstHeader,ImageHome ,Btn} from "./Spinner.style"
import Black from '../../assets/images/black2.jpg'
import {FaAngleRight} from 'react-icons/fa'
export default function Spinner(){
    return(
        <>
            <Container>
                <ImageHome>
                    <img src={Black} alt="Home " />
                </ImageHome>
                <Text>
                    <DescriptionCaption>supercar</DescriptionCaption>
                    <FirstHeader>RENT A CAR</FirstHeader>
                </Text>
                <Btn>
                    <FaAngleRight />
                </Btn>
            </Container>
        </>
    )
}