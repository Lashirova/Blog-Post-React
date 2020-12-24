import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
// import App from './App';
import {BlogPost} from './BlogPost';
import {Greeting, Welcome} from './Greeting';
import reportWebVitals from './reportWebVitals';

const components = (
  <div id="parent">
    <Welcome />
    <Greeting />
    <BlogPost />
  </div>
)

ReactDOM.render(
  components,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();


{/* <React.StrictMode>
    <App />
  </React.StrictMode> */}