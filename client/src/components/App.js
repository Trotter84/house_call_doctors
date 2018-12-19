import React, { Component } from 'react';
import { Route, Switch, Redirect } from 'react-router-dom'
import TopMenu from './TopMenu';
import Navbar from './Navbar';
import Footer from './Footer';
import Home from './Home';
import AboutUs from './AboutUs';
import OurServices from './OurServices';
import OurPrivacyPolicy from './OurPrivacyPolicy';
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
        <Route exact path='/about-us' component={AboutUs} />
        <Route exact path='/our-services' component={OurServices} />
        <Route exact path='/our-privacy-policy' component={OurPrivacyPolicy} />
        <Route exact path='/contact-us' component={ContactUs} />
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
