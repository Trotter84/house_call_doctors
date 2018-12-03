import React, { Component } from 'react';
// import { Route, Switch } from 'react-router-dom'
import TopMenu from './TopMenu';
import Navbar from './Navbar';
import Home from './Home';
import AboutUs from './AboutUs';
import '../index.css';


const styles = {
  container:{
    width: '1250px',
    margin: 'auto',
  },
};

class App extends Component {

  render() {
    return (
    // <div>
      <div style={styles.container} >
        <TopMenu />
        <Navbar />
        <Home />
      </div>
    //   <div>
    //     <Switch>
    //       <Route exact path='/Home' component={Home} />
    //     </Switch>
    //   </div>
    // </div>
    );
  }
};

export default App;
