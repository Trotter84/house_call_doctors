import React, { Component } from 'react';
import { Image } from 'semantic-ui-react';
import { Link } from 'react-router-dom';
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
        <Link to={`/`}>
          <Image style={styles.divStyle} src={HCDLogo} size='medium' />
        </Link>
      </div>
    )
  }
}




export default Navbar;
