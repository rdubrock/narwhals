import React, { Component } from 'react';
import './App.css';
import AppBar from 'material-ui/AppBar';
import Drawer from 'material-ui/Drawer';
import MenuItem from 'material-ui/MenuItem';
import Subheader from 'material-ui/Subheader';
import Home from './Home';
import Diet from './Diet';
import Anatomy from './Anatomy';
import Scientific from './Scientific';
import Images from './Images';
import Reproduction from './Reproduction';
import Behavior from './Behavior';
import Habitat from './Habitat';

import {
  BrowserRouter as Router,
  Route,
  Link,
} from 'react-router-dom';

class App extends Component {
  constructor() {
    super();
    this.state = {
      drawerOpen: false,
    };
  }

  toggleDrawer = () => {
    this.setState({ drawerOpen: !this.state.drawerOpen })
  }

  render() {
    return (
      <div className="App">
        <AppBar
          title='Narwhals, better than puffins'
          onLeftIconButtonClick={ this.toggleDrawer }
        />
        <Drawer
          docked={ false }
          open={ this.state.drawerOpen }
          onRequestChange={ this.toggleDrawer }
        >
          <Subheader>Narwhal Stuff</Subheader>
          <MenuItem>
            <Link to='/'>Home</Link>
          </MenuItem>
          <MenuItem>
            <Link to='/diet'>Diet</Link>
          </MenuItem>
          <MenuItem>
            <Link to='/anatomy'>Anatomy And Biology</Link>
          </MenuItem>
          <MenuItem>
            <Link to='/scientific'>Scientific Name and Class</Link>
          </MenuItem>
          <MenuItem>
            <Link to='/images'>Image Gallery</Link>
          </MenuItem>
          <MenuItem>
            <Link to='/reproduction'>Mating and Reproduction Info</Link>
          </MenuItem>
          <MenuItem>
            <Link to='/behavior'>Behavior</Link>
          </MenuItem>
          <MenuItem>
            <Link to='/habitat'>Habitat</Link>
          </MenuItem>
        </Drawer>
        <Route path='/' component={ Home } />
        <Route path='/diet' component={ Diet } />
        <Route path='/anatomy' component={ Anatomy } />
        <Route path='/scientific' component={ Scientific } />
        <Route path='/images' component={ Images } />
        <Route path='/reproduction' component={ Reproduction } />
        <Route path='/behavior' component={ Behavior } />
        <Route path='/habitat' component={ Habitat } />
        <p className="App-intro">
          This Site is all about Narwhals!
        </p>
        <h3>Research Citations</h3>
        <a href="https://en.wikipedia.org/wiki/Narwhal">Wiki page for Narwhal</a>
        <a href="https://www.worldwildlife.org/stories/unicorn-of-the-sea-narwhal-facts">WorldWildlife</a>
        <a href="https://owlcation.com/stem/The-Narwhal-The-Fascinating-Unicorn-Whale-of-the-Arctic-Ocean">Owlcation</a>
      </div>
    );
  }
}

export default App;
