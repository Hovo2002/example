import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import AppBar from './AppBar';
import IconAvatar from './IconAvatar';
import LetterAvatar from './LetterAvatar';
import Badge from './Badge';
import BottomNavigation from './BottomNavigation';
import Button from './Button';
import Media from './Media';
import Music from './Music';
import Paella from './Paella';
import Chips from './Chips';
import Divider from './Divider';
import Drawer from './Drawer';
import { withStyles } from "@material-ui/core/styles";
import PropTypes from "prop-types";

class App extends Component {
  render() {
    const { classes } = this.props;

    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <AppBar/>
        <IconAvatar/>
        <LetterAvatar/>
        <Badge/>
        <div className={classes.bottomnav}>
        <BottomNavigation/>
        </div>
        <Button/>
        <div className={classes.media}>
          <Media/>
          <Music/>
        </div>
        <div className={classes.paella}>
          <Paella/>
        </div>
        <div className={classes.chip} >
          <Chips/>
        </div>
        <div>
          <Divider/>
        </div>
        <Drawer/>
      </div>
    );
  }
}
App.propTypes = {
  classes: PropTypes.object.isRequired
};

const styles = theme => ({
  media: {
    display: "flex",
    justifyContent: 'space-around'
  },
  paella: {
    marginTop:50,
    flex: 1,
    marginLeft:"38%"
  },
  chip:{
    marginTop:50
  },
  bottomnav:{
    marginLeft:"38%"
  },
  space:{
    marginTop:30,
    marginBottom:30
  }
});
 



export default withStyles(styles)(App);
