import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {BrowserRouter, Switch, Route} from "react-router-dom";
import Reviews from './components/Reviews';
import BillPay from './components/BillPay';
import TermsOfService from './components/TermsOfService';
import * as FaIcons from 'react-icons/fa'



ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
        {/* <Route exact path="/"> */}
          <App />
        {/* </Route> */}

      {/* <Switch>
        <Route exact path = "/paymybill">
          <BillPay />
        </Route>
      </Switch>

      <Switch>
        <Route exact path="/reviews">
          <Reviews />
        </Route>
      </Switch>

      <Switch>
        <Route exact path='/tos'>
          <TermsOfService />
        </Route>
      </Switch> */}


    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
