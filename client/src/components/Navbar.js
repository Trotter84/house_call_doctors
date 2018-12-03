import React, { Component } from 'react';
import {
   Menu,
   Icon,
   Image
 } from 'semantic-ui-react';
import HCDLogo from '../images/HCDLogo.png';

const styles = {
  divStyle: {
    margin: '0px 0px 0px 10px'
  },

}


class Navbar extends Component {

  render() {
    return (
      <div>
        <Image style={styles.divStyle} src={HCDLogo} size='medium' />
      </div>
    )
  }
}




export default Navbar;
