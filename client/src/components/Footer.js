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
            <p style={styles.p}>Copyright © 2019 <Link to={`/`}><Color> &nbsp; House Call Doctors of Utah. &nbsp; </Color></Link>All rights reserved.</p>
            <div style={styles.right}>
              <p><Link to={'/'}>Home</Link> .</p>
              <p>. <Link to={'about-us'}>About Us</Link> .</p>
              <p>. <Link to={'our-providers'}>Our Providers</Link> .</p>
              <p>. <Link to={'our-services'}>Our Services</Link> .</p>
              <p>. <Link to={'our-privacy-policy'}>Our Privacy Policy</Link> .</p>
              <p>. <Link to={'contact-us'}>Contact Us</Link></p>
            </div>
          </div>
        </div>
      </div>
    )
  }
};

export default Footer;
