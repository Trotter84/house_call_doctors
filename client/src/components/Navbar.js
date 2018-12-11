import React, { Component } from 'react';
import { Image } from 'semantic-ui-react';
import { Link } from 'react-router-dom';
import Styled from 'styled-components';
import HCDLogo from '../images/HCDLogo.png';

const styles = {
  container:{
    display: 'flex',
    flexDirection: 'row',
  },

  divStyle:{
    margin: '0px 0px 0px 10px'
  },
}

const Nav = Styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-evenly;
`

class Navbar extends Component {

  render() {
    return (
      <div style={styles.container}>
        <Link to={`/`}>
          <Image style={styles.divStyle} src={HCDLogo} size='medium' />
        </Link>
        <Nav>
          <p><Link to={'/'}>HOME</Link></p>
          <p><Link to={'about-us'}>ABOUT US</Link></p>
          <p><Link to={'our-providers'}>OUR PROVIDERS</Link></p>
          <p><Link to={'our-services'}>OUR SERVICES</Link></p>
          <p><Link to={'our-privacy-policy'}>OUR PRIVACY POLICY</Link></p>
          <p><Link to={'contact-us'}>CONTACT US</Link></p>
        </Nav>
      </div>
    )
  }
}




export default Navbar;
