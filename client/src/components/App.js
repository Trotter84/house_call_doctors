import React, { Component } from 'react';
import {
  Route,
  Routes,
  Navigate,
  Router
} from 'react-router-dom';
import { ScrollManager, WindowScroller } from 'react-scroll-manager';
import { createBrowserHistory as createHistory } from 'history';
import Styled from 'styled-components';
import TopMenu from './menus/TopMenu';
import Navbar from './menus/Navbar';
import Footer from './menus/Footer';
import BottomMenuMobile from './menus/BottomMenuMobile';
import Home from './pages/Home';
import AboutUs from './pages/AboutUs';
import OurProviders from './pages/OurProviders';
import OurServices from './pages/OurServices';
import OurPrivacyPolicy from './pages/OurPrivacyPolicy';
import ContactUs from './pages/ContactUs';
import './App.css';


const Container = Styled.div`
  max-width: 1250px;
  width: 100%;
  margin: auto;
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
              <Routes>
                <Route exact path='/' element={Home} />
                <Route path='/about-us' element={AboutUs} />
                <Route path='/our-providers' element={OurProviders} />
                <Route path='/our-services' element={OurServices} />
                <Route path='/our-privacy-policy' element={OurPrivacyPolicy} />
                <Route path='/contact-us' element={ContactUs} />
                <Navigate to='/'/>
              </Routes>
              <div>
                <Footer />
              </div>
              <BottomMenuMobile />
            </div>
          </WindowScroller>
        </Router>
      </ScrollManager>
    );
  }
};

export default App;
