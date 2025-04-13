import React from 'react';
import ReactDOM from 'react-dom/client';
// import App1 from './App';
// import "./Assets/index.css"
// import Hook1 from './Hooks1/hook1';
// import Lp from './LearnProps/lp';
// import "./LearnProps/lp.css";
import ChatRoom from './hecker/hecker';

// import CR from './ConditionalRender/cr';

import RL from './RenderList/RL';

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
    <ChatRoom/>
  </React.StrictMode>

);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

