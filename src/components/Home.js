import Description from "./Description"
import Footer from "./Footer"
import * as FaIcons from 'react-icons/fa'
import styled from "styled-components"
import Video from "./Video"


function Home(){
    return(
        <div>
            <Video />
            <H1>PoolBoy</H1>
            <IconContainer>
            <FaIcons.FaSwimmingPool />
            </IconContainer>
            <Description />
            
            <Footer />
        </div>
    )
}


export default Home

const IconContainer = styled.div`
    margin: 5px;
    font-size: 300px;
    margin-top: -3%;
`

const H1 = styled.h1`
    font-size: 100px;
`

