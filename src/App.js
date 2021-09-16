import './App.css';
import styled from "styled-components"
import NavBar from './components/NavBar';
import Reviews from './components/Reviews';
import BillPay from './components/BillPay';
import TermsOfService from './components/TermsOfService';
import { useEffect, useState } from 'react';
import {BrowserRouter, Switch, Route} from "react-router-dom";
import Home from "./components/Home"


function App() {
  //set states for the component arrays
  
  //   const[owners, setOwners] = useState([] )

  //post headers
//   const headers = {
//     Accepts: "application/json",
//     "Content-Type": "application/json",
// }     

// // post a new review to the backend
//   function addNewRev(review){
//     console.log("This is a review", review)
//     fetch("http://localhost:9292/reviews", {
//         method: 'POST',
//         body: JSON.stringify(review),
//         headers,
//     })
//     .then(resp=>resp.json())
//     .then((json)=> setReviews([...reviews, review]))
// }

// function DeleteReview(e){
//   console.log("this log is in delete method in app", e)
//   fetch(`http://localhost:9292/reviews/${e.id}`, {
//       method: "DELETE",
//     })
//       // .then((r) => r.json())
//       // .then((deletedReview) => {
//         // console.log("the review that was deleted", deletedReview);
//         let reviewsRemaining = reviews.filter(eachReview=> eachReview.id !== e.id);
//         setReviews([...reviewsRemaining])
//   // })
// }








  //fetch the owners array
  // useEffect(()=>{
  //   fetch("http://localhost:9292/owners")
  //   .then(resp=> resp.json())
  //   .then(owner => {
  //     console.log(owner)
  //     setOwners(owner)
  //   })
  // }, [])
  
  return (
    <div className="App">
        <BrowserRouter>
          <AppWrapper>
            <NavBar />
            {/* <Switch > */}

              <Route exact path="/reviews">
                 <Reviews />
                 {/* addNewRev={addNewRev} reviews={reviews} handleDelete={DeleteReview} */}
              </Route >

              <Route exact path="/paymybill" component={BillPay} />

              <Route exact path="/" component={Home} />
              

            {/* </Switch> */}
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
position: absolute;
text-align: center;
color: white;
`

const FooterWrapper = styled.footer`
/* background-color: #282828; */
background-color: #fff;
bottom: 0;
`
const NavBarWrapper = styled.div`
  background-color: #2d7487;
`
