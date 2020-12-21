import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {BrowserRouter,Link,Switch,Route} from 'react-router-dom'
import SearchBar from './Components/SearchBar';
function RouteFunct(){
  return(
    <div>
     
    </div>
  )
}

ReactDOM.render(
  <React.StrictMode>
   {/* <App />  */}
   <BrowserRouter>
      {/* <ul>
        <li><Link to="/search">Search</Link></li>
      </ul> */}
     
      <Route path="/search" component={SearchBar}></Route> 
      </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals(console.log);
