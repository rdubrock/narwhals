import React, { Component } from 'react';
import './App.css';
import AppBar from 'material-ui/AppBar';
import Drawer from 'material-ui/Drawer';
import MenuItem from 'material-ui/MenuItem';
import Subheader from 'material-ui/Subheader';
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
            <Link to='/diet'>Diet</Link>
          </MenuItem>
          <MenuItem>
            <Link to='/anatomy'>Anatomy And Biology</Link>
          </MenuItem>
          <MenuItem>
            <Link to='/name'>Scientific Name and Class</Link>
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
        </Drawer>
        <header className="App-header">
          <img src='jedi_narwhal.jpg' className="App-logo" alt="logo" />
          <h1 className="App-title">Narwhals, Yeah!</h1>
        </header>
        <p className="App-intro">
          This Site is all about Narwhals!
        </p>
        <h3>Diet</h3>
        <p>
          It feeds on bethic prey, mostly flatfish. In summer it eats cod, halibut, squid, and would definitely eat Mitch. They have no teeth, they suck in their prey and swallow it whole. They eat upto 15 times a day, they eat 25 to 50 pounds per day (like Matthew Cockcroft).
        </p>
        <h3>Where on earth is the animal found?</h3>
        <p>Canadian Artic, Greenlandic & Russian Waters</p>
        <h3>What natural surroundings does the animal need to thrive?</h3>
        <p>Lives in the water but not in freezing waters. Also on the Serengeti, but not the frozen Serengeti</p>
        <h3>Where does the animal make its home?</h3>
        <p>They migrate from the bays to the ocean as summer comes</p>
        <h3>Mating and reproduction</h3>
        <p>Males mature at 11-13 yrs old. Females mature at 5-8 years old. Gestation lasts 14 months. Gestation lasts 14 months. A single calf is normal. They are weaned at 20 months. They meet their mates at narwhal discos.</p>
        <h3>Scientific Name and Classification</h3>
        <p> Primary Species of animal: Odontoceti </p>
        <p>Animal's scientific classification: whale in Mondontidae Family </p>
        <p>Scientific name: Monodon Monoceros</p>
        <h3>Anatomy and biology</h3>
        <p>
          Height: 3.95-5.5m
          Weight: 800-1600kgs
          Unique Physical Characteristics:
          The narwhal, or narwhale, is a medium-sized toothed whale that possesses a large "tusk" from a protruding canine tooth.
          The narwhal males are distinguished by a long, straight, helical tusk, which is an elongated upper left canine.
          Animal Breathe Pattern:
          As narwhals need to breathe, they drown if open water is no longer accessible and the ice is too thick for them to break through. Maximum aerobic swimming distance between breathing holes in ice is less than 1,450 m (4,760 ft) which limits the use of foraging grounds, and these holes must be at least 0.5 m (1.6 ft) wide to allow an adult whale to breathe.
          Life Span:
          Narwhals can live up to at least 50 years
        </p>
        <h3>Behavior</h3>
        <p>The animal gets food by diving to the bottom of the water and eating.  Almost all modern predation of narwhals is by humans.Other predators are polar bears, which attack at breathing holes mainly for young narwhals, Greenland sharks and walruse.  Killer whales (orcas) group together to overwhelm narwhal pods in the shallow water of enclosed bays,   To escape predators such as orcas, narwhals may use prolonged submergence to hide under ice floes rather than relying on speed.  Narwhals have to consciously decide to breathe, unlike us. This means that the whales don't sleep in quite the same way that we do, since part of their brain must make the decision to surface for air.</p>
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

export default App;
