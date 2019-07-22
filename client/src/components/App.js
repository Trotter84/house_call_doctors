import React, { Component } from 'react';
import {
  Route,
  Switch,
  Redirect,
  Router
} from 'react-router-dom';
import { ScrollManager, WindowScroller } from 'react-scroll-manager';
import { createBrowserHistory as createHistory } from 'history';
import Styled from 'styled-components';
import TopMenu from './menus/TopMenu';
import Navbar from './menus/Navbar';
import Footer from './menus/Footer';
import Home from './pages/Home';
import AboutUs from './pages/AboutUs';
import OurProviders from './pages/OurProviders';
import OurServices from './pages/OurServices';
import OurPrivacyPolicy from './pages/OurPrivacyPolicy';
import ContactUs from './pages/ContactUs';
import '../index.css';


const Container = Styled.div`
  max-width: 1250px;
  width: 100%;
  margin: auto;

  @mobile screen and (max-device-width: 375px) {
    max-width: 375px;
    background-color: blue;
  }
`



class App extends Component {

  constructor() {
    super();
    this.history = createHistory();
  }

  render() {
    return (
      <ScrollManager history={this.history}>
        <Router history={this.history}>
          <WindowScroller>
            <div className="nav">
              <TopMenu />
              <Container id='AppContainer'>
                <Navbar />
              </Container>
              <Switch>
                <Route exact path='/' component={Home} />
                <Route path='/about-us' component={AboutUs} />
                <Route path='/our-providers' component={OurProviders} />
                <Route path='/our-services' component={OurServices} />
                <Route path='/our-privacy-policy' component={OurPrivacyPolicy} />
                <Route path='/contact-us' component={ContactUs} />
                <Redirect to='/'/>
              </Switch>
              <div>
                <Footer />
              </div>
            </div>
            </WindowScroller>
          </Router>
        </ScrollManager>
    );
  }
};

export default App;
