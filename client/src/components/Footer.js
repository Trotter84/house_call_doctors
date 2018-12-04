import React, { Component } from 'react';


const styles = {
  footer:{
    backgroundColor: '#1C1C1C',
    height: '125px',
  },

  container:{
    width: '1250px',
    margin: 'auto',
  },
};

class Footer extends Component {

  render() {
    return(
      <div style={styles.footer}>
        <div style={styles.container}>
          <h1>Hello</h1>
        </div>
      </div>
    )
  }
};

export default Footer;
