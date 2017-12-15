import React, { Component } from 'react';

export default class Home extends Component {
  render() {
    return (
      <div>
        <img src='jedi_narwhal.jpg' className="App-logo" alt="logo" />
        <h1 className="App-title">Narwhals, Yeah!</h1>
        <iframe width="560" height="315" src="https://www.youtube.com/embed/GcYVCvBq0FY" frameborder="0" gesture="media" allow="encrypted-media" allowfullscreen></iframe>
      </div>
    )
  }
}