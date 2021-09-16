import './App.css';
import styled from "styled-components"
import NavBar from './components/NavBar';
import Reviews from './components/Reviews';
import BillPay from './components/BillPay';
import TermsOfService from './components/TermsOfService';
import {BrowserRouter, Switch, Route} from "react-router-dom";
import Home from "./components/Home"
import { useEffect, useState } from "react"



function App() {

  const [owners, setOwners] = useState([])
  
  // const [user, setUser]= useState([owner[0]].name)

  //get the list of owners
  useEffect(()=>{
      fetch("http://localhost:9292/owners")
      .then(resp=>resp.json())
      .then(each_owner=> setOwners(each_owner))
  }, [])



let user = owners[0]
console.log(user)

  return (
    <div className="App">
        <BrowserRouter>
          <AppWrapper>
            <NavBarWrapper>
            <NavBar user={user}/>
            </NavBarWrapper>
              <Route exact path="/reviews">
                <Reviews />
              </Route >
              <Route exact path="/paymybill">
                <BillPay />
              </Route>
              <Route exact path="/tos">
                <TermsOfService />
              </Route>
              <Route exact path="/">
                <Home />
              </Route>
          </AppWrapper>
        </BrowserRouter>
    </div>
      );
  }
            
  export default App;

const AppWrapper = styled.div`
background-color: #c0d6d8 ;
top: 0%;
bottom: 0%;
left: 0%;
right: 0%;
position: flex;
text-align: center;
color: white;
min-height: 100vh;
min-width: 100vh;
`

const FooterWrapper = styled.footer`
/* background-color: #282828; */
background-color: #fff;
bottom: 0;
position: absolute;
`
const NavBarWrapper = styled.div`
  background-color: #2d7487;
  padding: 20px;
`
