import React, { Component } from 'react';
import { Route, Switch, Redirect } from 'react-router-dom'
import TopMenu from './TopMenu';
import Navbar from './Navbar';
import Footer from './Footer';
import Home from './Home';
import AboutUs from './AboutUs';
import ContactUs from './ContactUs';
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
    <div>
      <TopMenu />
      <div style={styles.container} >
        <Navbar />
      </div>
      <Switch>
        <Route exact path='/' component={Home} />
        <Route exact path='/contact' component={ContactUs} />
        <Redirect to='/'/>
      </Switch>
      <div>
        <Footer />
      </div>
    </div>
    );
  }
};

export default App;
