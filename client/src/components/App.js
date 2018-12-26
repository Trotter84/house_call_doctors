import React, { Component } from 'react';
import {
  Route,
  Switch,
  Redirect
} from 'react-router-dom'
import TopMenu from './menus/TopMenu';
import Navbar from './menus/Navbar';
import Footer from './menus/Footer';
import Home from './pages/Home';
import AboutUs from './pages/AboutUs';
import OurProviders from './pages/OurProviders';
import OurServices from './pages/OurServices';
import OurPrivacyPolicy from './pages/OurPrivacyPolicy';
import ContactUs from './pages/ContactUs';
import MarkInfo from './infoPages/MarkInfo';
import PerrineInfo from './infoPages/PerrineInfo';
import RitaInfo from './infoPages/RitaInfo';
import SandraInfo from './infoPages/SandraInfo';
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
        <Route exact path='/our-providers' component={OurProviders} />
        <Route exact path='/our-services' component={OurServices} />
        <Route exact path='/our-privacy-policy' component={OurPrivacyPolicy} />
        <Route exact path='/contact-us' component={ContactUs} />
        <Route exact path='/marks-info' component={MarkInfo} />
        <Route exact path='/perrines-info' component={PerrineInfo} />
        <Route exact path='/ritas-info' component={RitaInfo} />
        <Route exact path='/sandras-info' component={SandraInfo} />
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
