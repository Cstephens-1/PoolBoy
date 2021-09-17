import styled from "styled-components"
import * as FaIcons from 'react-icons/fa'
import Footer from "./Footer"

function BillPay(){
    return (
        <>
        <Header>Payment Information</Header>
        <Balance>Your balance is:</Balance>
        <Announcement>Please pay your balance before your next cleaning. We accept most major credit cards or check. </Announcement>
        <IconContainer>
            <CardContainer>
                <FaIcons.FaCcVisa />
            </CardContainer>
        {/* </IconContainer>
        <IconContainer> */}
        <CardContainer>
        <FaIcons.FaCcMastercard />
        </CardContainer>
        {/* </IconContainer>
        <IconContainer> */}
        <CardContainer>
        <FaIcons.FaCcDiscover />
        </CardContainer>
        </IconContainer>

        <FormStyler>
            <LabelMaker>
                Card Number: 
                    <InputStyler placeholder=" Credit Card Number"/> 
            </LabelMaker>

            <br></br>

            <LabelMaker>
                Expiration:  
            <InputStyler placeholder=" Exp. Date"/>
            </LabelMaker>

            <br></br>

        <LabelMaker>
            Security Code: 
            <InputStyler placeholder=" CVV"/>
            </LabelMaker>

            <br></br>

            <LabelMaker>
                Amount:  
            <InputStyler placeholder=" Amount"/>
            </LabelMaker>

            {/* <br></br>

            <br></br> */}
            <Button type="Submit">Pay</Button>


        </FormStyler>
        {/* <FooterBottom>
        <Footer />
        </FooterBottom> */}
        </>




    )
}

export default BillPay

const Header = styled.h1`
    text-align: center;
    color: #046489

`

const Balance = styled.h3`
    font-size: 25px;
    color: #046489
`

const IconContainer = styled.div`
    margin: 5px;
    font-size: 50px;
    display: flex;
    flex-direction: row;
    justify-content: center;
     color: #046489
;
`

const CardContainer = styled.div`
    margin: 8px;
`

const FormStyler = styled.form`
    height: 500px;
    border-style: solid;
    border-color: #3a7587; 
    width: 45%;
    margin: auto;
    align-content: center ;
    display: inline-block;
`

const LabelMaker = styled.label`
    color:black;
    font-size: 25px;
    /* float: right; */
    display: block;
    margin-top: 25px;
    /* position: relative; */
`

const Button = styled.button`
    font-size: 20px;
    border-radius: 8px;
    background-color: lightgrey;
    margin: 7px;
    padding: 12px;
`

const InputStyler= styled.input`
    margin-left: -50px;
    margin-right: 150px;
    /* margin-top: 25px; */
    height: 20px;
    position: relative; 
    /* display: inline-block; */
    min-width: 40%;
    min-height: 30px;
    float:right;
`

const Announcement=styled.div`
color: #046489;
font-size: 25px;
font-weight: 700;
`

/* const FooterBottom=styled.div`
    bottom: 0;
` */