import React from 'react';
import ReactDOM from 'react-dom/client';
// import App1 from './App';
// import "./Assets/index.css"
import US1 from './LearnHooks/US1';
import "./LearnHooks/US1.css";






const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  // <React.StrictMode>
  //  <Lp name="Tom" age={25} isStudent = {true}/>
  //  <Lp name="Jerry" age={22} isStudent = {true}/>
  //  <Lp name="Bob" age={35} isStudent = {false}/>
  // </React.StrictMode>

  // <React.StrictMode>
  //  <CR isLoggedIn={true} userName = "Jack" />
  // </React.StrictMode>

  <React.StrictMode>
    <US1/>
  </React.StrictMode>

);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

