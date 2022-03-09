import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import reportWebVitals from './reportWebVitals';
import Home from './pages/Home/index';
import Error from './pages/Error/index';
import {
  BrowserRouter as Router,
  Route,
  Routes
} from "react-router-dom";
import Accomodation from './pages/Accomodation';
import Header from './components/header';


ReactDOM.render(
  <React.StrictMode>
      <Router>
        <Header />
        <Routes>
          <Route exact path="/" element={<Home />}>
          </Route>
          <Route path="/Accomodation/: accomodationId" element={<Accomodation />}>
          </Route>

          <Route path="/Error" element={<Error />}>
          </Route>
        </Routes>  
      </Router>
  </React.StrictMode>,
document.getElementById('root')
)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
