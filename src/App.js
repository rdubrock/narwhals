import React, { Component } from 'react';
import './App.css';
import AppBar from 'material-ui/AppBar';
import Drawer from 'material-ui/Drawer';
import MenuItem from 'material-ui/MenuItem';
import Subheader from 'material-ui/Subheader';
import AutoComplete from 'material-ui/AutoComplete';
import Home from './Home';
import Diet from './Diet';
import Anatomy from './Anatomy';
import Scientific from './Scientific';
import Images from './Images';
import Reproduction from './Reproduction';
import Behavior from './Behavior';
import Habitat from './Habitat';

import { withRouter } from 'react-router-dom';
import {
  Route,
  Link,
} from 'react-router-dom';

class App extends Component {
  constructor() {
    super();
    this.state = {
      drawerOpen: false,
      dataSource: [
        'Home',
        'Diet',
        'Anatomy',
        'Name',
        'Image Gallery',
        'Reproduction',
        'Behavior',
      ],
    };
  }

  toggleDrawer = () => {
    this.setState({ drawerOpen: !this.state.drawerOpen })
  }

  handleSearch = (value) => {
    const { history } = this.props;
    switch(value) {
      case 'Home':
        history.push('/')
        break;
      case 'Diet':
        history.push('/diet');
        break;
      case 'Anatomy':
        history.push('/anatomy');
        break;
      case 'Name':
        history.push('/name');
        break;
      case 'Image Gallery':
        history.push('/images');
        break;
      case 'Reproduction':
        history.push('/reproduction');
        break;
      case 'Behavior':
        history.push('/behavior');
        break;
    }
  }

  generateColor() {
    return Math.ceil(Math.random() * 255); 
  }

  render() {
    return (
      <div className="App" style={ { backgroundColor: `rgb(${this.generateColor()},${this.generateColor()},${this.generateColor()})` }}>
        <AppBar
          title='Narwhals, better than puffins'
          onLeftIconButtonClick={ this.toggleDrawer }
        />
        <div style={ {
          backgroundColor: 'white',
          height: '100%',
        }}>
          <AutoComplete
            hintText='Search Term'
            fullWidth={ true }
            dataSource={ this.state.dataSource }
            onNewRequest={ this.handleSearch }
            filter={ AutoComplete.fuzzyFilter }
          />
        </div>
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
        <Route exact path='/' component={ Home } />
        <Route path='/diet' component={ Diet } />
        <Route path='/anatomy' component={ Anatomy } />
        <Route path='/scientific' component={ Scientific } />
        <Route path='/images' component={ Images } />
        <Route path='/reproduction' component={ Reproduction } />
        <Route path='/behavior' component={ Behavior } />
        <Route path='/habitat' component={ Habitat } />
        <h3>Research Citations</h3>
        <a href="https://en.wikipedia.org/wiki/Narwhal">Wiki page for Narwhal</a>
        <a href="https://www.worldwildlife.org/stories/unicorn-of-the-sea-narwhal-facts">WorldWildlife</a>
        <a href="https://owlcation.com/stem/The-Narwhal-The-Fascinating-Unicorn-Whale-of-the-Arctic-Ocean">Owlcation</a>
      </div>
    );
  }
}

export default withRouter(App);
