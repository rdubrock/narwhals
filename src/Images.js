import React, { Component } from 'react';

export default class Images extends Component {
  render() {
    return (
      <div className="Images">
        <h3>Image gallery</h3>
        <h4>A Lovely Narwhal</h4>
        <a href="/">
        <img src='https://raw.githubusercontent.com/rdubrock/narwhals/master/build/Narwhal.jpg' alt="logo" />
        </a>
        <h4>Another Lovely Narwhal</h4>
        <a href="/habitat">
        <img src='https://raw.githubusercontent.com/rdubrock/narwhals/master/build/narwhal_pod.jpg' alt="logo" />
        </a>
        <h4>Narwhals are better than dolphins</h4>
        <a href="/behavior">
        <img src='https://raw.githubusercontent.com/rdubrock/narwhals/master/build/narwhal_tooth.jpg' alt="logo" />
        </a>
        <h4>Steve the narwhal</h4>
        <a href="/communications">
        <img src='https://raw.githubusercontent.com/rdubrock/narwhals/master/build/narwhals_underwater.jpg' alt="logo" />
        </a>
        <a href="/funfacts">
          <img src='https://raw.githubusercontent.com/rdubrock/narwhals/master/build/narwhals_funfacts.jpg' alt="logo" />
        </a>
        <p>To submit your own narwhal picture, send us an email at narwahls@narwhals.narwhal</p>
      </div>
    );
  }
}