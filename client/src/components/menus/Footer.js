import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Styled from 'styled-components';



const Color = Styled.div`
  color: white;
  font-weight: bold;
  :hover{
    color: #AF3120;
  }
`

const Nav = Styled.div`
  width: 550px;
  padding-right: 50px;
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  justify-content: space-between;
`

const RedFade = Styled.div`
  font-size: 13px;
  color: white;
  transition: all 200ms ease-in-out;
  :hover {
    color: #AF3120;
  }
`

const styles = {
  footer:{
    backgroundColor: '#1C1C1C',
    height: '100px',
  },

  container:{
    width: '1250px',
    margin: 'auto',
  },

  box:{
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },

  p:{
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    padding: '25px 0 0 30px',
    color: '#878787',
  },

  right:{
    paddingTop: '25px',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-evenly',
  },
};

class Footer extends Component {

  render() {
    return(
      <div style={styles.footer}>
        <div style={styles.container}>
          <div style={styles.box}>
            <p style={styles.p}>Copyright © 2019 <Link to={`/`}><RedFade> &nbsp; House Call Doctors of Utah. &nbsp; </RedFade></Link>All rights reserved.</p>
            <div style={styles.right}>
              <Nav>
                <Link to={'/'}><RedFade>Home</RedFade></Link>
                <Link to={'about-us'}><RedFade>About Us</RedFade></Link>
                <Link to={'our-providers'}><RedFade>Our Providers</RedFade></Link>
                <Link to={'our-services'}><RedFade>Our Services</RedFade></Link>
                <Link to={'our-privacy-policy'}><RedFade>Our Privacy Policy</RedFade></Link>
                <Link to={'contact-us'}><RedFade>Contact Us</RedFade></Link>
              </Nav>
            </div>
          </div>
        </div>
      </div>
    )
  }
};

export default Footer;
