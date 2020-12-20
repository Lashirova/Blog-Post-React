import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

let classProperties = 'blue small-font';
// const blueColor = 'blue';
// const smallFont = 'small-font';

const myBlogPost = {
  title: 'My first blog',
  body: 'lorem ipsum dolor sit amet..'
}

const blogPost = (
  <div>
    <h1 id="title" className={classProperties}>{myBlogPost.title}</h1>
    <p></p>
    <img src="" alt="" />
  </div>
);

ReactDOM.render(
  blogPost,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();


{/* <React.StrictMode>
    <App />
  </React.StrictMode> */}