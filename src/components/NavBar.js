import styled from "styled-components"
import {Link} from "react-router-dom"
import { useEffect, useState } from "react"





function NavBar({owner}){

    // console.log(user)
    const [user, setUser]=useState({})

    console.log(owner)


    const [login, setLogin] = useState([false])

      function toggleLogin(){
    setLogin(!login)  
}

    

  



    //if state of login is false, then welcome message is login. 
    //if state of login is true, then welcome message is welcome, user.

    
    return (
        <>
        {login ? <h3>Welcome</h3> : <h3>Login to continue</h3>}
        
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
        <Button onClick={toggleLogin}>{login? "Logout" : "Login"}</Button>
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