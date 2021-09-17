import './App.css';
import styled from "styled-components"
import NavBar from './components/NavBar';
import Reviews from './components/Reviews';
import BillPay from './components/BillPay';
import TermsOfService from './components/TermsOfService';
import {BrowserRouter, Route} from "react-router-dom";
import Home from "./components/Home"
import { useEffect, useState } from "react"
import Footer from './components/Footer';



function App() {

  // const [owners, setOwners] = useState([])
  
  

  // //get the list of owners
  // useEffect(()=>{
  //     fetch("http://localhost:9292/owners")
  //     .then(resp=>resp.json())
  //     .then(each_owner=> setOwners(each_owner))
  // }, [])


  return (
    <div className="App">
        <BrowserRouter>
          <AppWrapper>
            <NavBarWrapper>
            <NavBar />
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
const NavBarWrapper = styled.div`
  background-color: #2d7487;
  padding: 20px;
  z-index: +1;
`
