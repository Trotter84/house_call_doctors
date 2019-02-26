import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Styled from 'styled-components';


const StyledLink = Styled(Link)`
  font-size: 13px;
  color: white;
  transition: all 200ms ease-in-out;
  :hover {
    color: #AF3120;
  }
`

const Nav = Styled.div`
  margin-right: 25px;
  display: flex;
  flex-flow: row wrap;
  justify-content: flex-end;

  ${StyledLink} {
    margin-left: 20px;
  }
`

const styles = {
  footer:{
    backgroundColor: '#1C1C1C',
    height: '100px',
  },

  container:{
    maxWidth: '1250px',
    margin: 'auto',
  },

  box:{
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },

  p:{
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
            <p style={styles.p}>Copyright © 2019 <StyledLink to={`/`}> &nbsp; House Call Doctors Utah. &nbsp; </StyledLink>All rights reserved.</p>
            <div style={styles.right}>
              <Nav>
                <StyledLink to={'/'}>Home</StyledLink>
                <StyledLink to={'about-us'}>About Us</StyledLink>
                <StyledLink to={'our-providers'}>Our Providers</StyledLink>
                <StyledLink to={'our-services'}>Our Services</StyledLink>
                <StyledLink to={'our-privacy-policy'}>Our Privacy Policy</StyledLink>
                <StyledLink to={'contact-us'}>Contact Us</StyledLink>
              </Nav>
            </div>
          </div>
        </div>
      </div>
    )
  }
};

export default Footer;
