import styled from "styled-components"
import * as FaIcons from 'react-icons/fa'

function BillPay(){
    return (
        <>
        <Header>Payment Information</Header>
        <Balance>Your balance is:</Balance>
        <div>Please pay your balance before your next cleaning. We accept most major credit cards or check. </div>
        <IconContainer>
        <FaIcons.FaCcVisa />
        </IconContainer>
        <IconContainer>
        <FaIcons.FaCcMastercard />
        </IconContainer>
        <IconContainer>
        <FaIcons.FaCcDiscover />
        </IconContainer>

            <br></br>
        <form>
            <label>
                Credit Card Number: 
            <input placeholder=" Credit Card Number"/> 
            </label>

            <br></br>

            <label>
                Expiration:  
            <input placeholder=" Exp. Date"/>
            </label>

            <br></br>

        <label>
            Security Code: 
            <input placeholder=" CVV"/>
            </label>

            <br></br>

            <label>
                Amount:  
            <input placeholder=" Amount"/>
            </label>

            <br></br>

            <br></br>
            <button type="Submit">Pay</button>


        </form>
        </>




    )
}

export default BillPay

const Header = styled.h1`
    text-align: center;

`

const Balance = styled.h3`
    font-size: 25px;
`

const IconContainer = styled.div`
    margin: 5px;
    font-size: 50px;
`