import styled from "styled-components"

function Description(){
    return(
        <PStyler>
            The PoolBoy is the premier residential and commercial pool cleaning service in the region. We are open 6 days a week and service any pool, no matter how much care they need. With an hourly rate we can provide superior service at competitive prices. 

            Call us today to schedule your free consultation so we can you back to enjoying your pool today!

            <marquee scrollamount="15">**Disclaimer: Please do not assault our pool boys.**</marquee>




        </PStyler>



    )
}

export default Description

const PStyler = styled.p`
    color: #3a7587;
    font-size: 24px;
    width: 60%;
    margin: auto;
    z-index: 1;
    margin-top: 15px;
    padding-bottom: 15px;
    border-style: solid;
    margin-bottom: 15px;
    padding-bottom: 15px;
    font-weight: 500;
    line-height: 35px;
    
`
