import React, { Component } from 'react';

export default class Images extends Component {
  render() {
    return (
      <div className="Images">
        <h3>Image gallery</h3>
        <h4>A Lovely Narwhal</h4>
        <img src='Narwhal.jpg' alt="logo" />
        <h4>Another Lovely Narwhal</h4>
        <img src='narwhal_pod.jpg' alt="logo" />
        <h4>Narwhals are better than dolphins</h4>
        <img src='narwhal_tooth.jpg' alt="logo" />
        <h4>Steve the narwhal</h4>
        <img src='narwhals_underwater.jpg' alt="logo" />
        <p>To submit your own narwhal picture, send us an email at narwahls@narwhals.narwhal</p>
      </div>
    );
  }
}