import styled from "styled-components"
import {Link} from "react-router-dom"


function NavBar(){
    return (
        <>
        <Link to="/">
            <Button>Home </Button>
        </Link>


        <Link to="/reviews">
            <Button>Reviews</Button>
        </Link>

        <Link to="/paymybill">
        <Button>Pay My Bill</Button>
        </Link>

        <Link to="/">
        <Button>Logout</Button>
        </Link>
        </>


    )
}

export default NavBar

const Button = styled.button`
    font-size: 20px;
    border-radius: 8px;
    background-color: lightgrey;
    margin: 7px;
    padding: 12px;

    &:hover{
        background-color: white;
        transform: translateY(-4px);
        transition-duration: 2000ms
    }

`