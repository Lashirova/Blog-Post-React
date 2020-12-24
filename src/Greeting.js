import React from 'react';

class Greeting extends React.Component {
  render() {
    return <h1>Hello John, welcome to my Blog</h1>
  }
}

class Welcome extends React.Component {
  render() {
    return <h1>Hello John, welcome.</h1>
  }
}

export {Greeting, Welcome};