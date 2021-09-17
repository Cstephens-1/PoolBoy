import Description from "./Description"
import Footer from "./Footer"
import * as FaIcons from 'react-icons/fa'
import styled from "styled-components"
import Video from "./Video"


function Home(){
    return(
  
        <Div>
            <H1>PoolBoy</H1>
            <IconContainer>
            <FaIcons.FaSwimmingPool />
            </IconContainer>
            <Video />
        <Description />
        <Footer />
            
            
            
        </Div>
            
    )
}


export default Home

const IconContainer = styled.div`
    margin: 5px;
    font-size: 300px;
    margin-top: -3%;
    margin-bottom: -3%;
`

const H1 = styled.h1`
    font-size: 100px;
    margin-bottom: -2%;
    margin-top: -1%;
    padding-top: 20px;
    padding-bottom: 25px;
`
const Div = styled.div`
    margin-bottom: 15px;
`
