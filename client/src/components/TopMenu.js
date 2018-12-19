import React, { Component } from 'react';
import { Menu, Icon } from 'semantic-ui-react';
import Styled from 'styled-components';


const Info = Styled.div`
  color: black;
  :hover{
    color: #AF3120;
  }
`

const styles = {
  background:{
    backgroundColor: '#f4f4f4',
  },

  bar:{
    width: '1250px',
    display: 'flex',
    flexDirection: 'row',
    margin: 'auto',
  }

};

class Navbar extends Component {

  render() {
    return (
      <Menu style={styles.background}>
        <div style={styles.bar}>
          <Menu.Item />
          <Menu.Item>
          <div>
            <Icon rotated='clockwise' size='small' name='phone' />
          </div>
            Call us now! 801-485-5055
          </Menu.Item>
          <Menu.Item>
          <div>
            <Icon size='small' name='mail' />
          </div>
          <a href="mailto:Caitlin@housecalldoctorsut.com">
            <Info>Caitlin@housecalldoctorsut.com</Info>
          </a>
          </Menu.Item>
          <Menu.Item>
          <div>
            <Icon size='small' name='map marker alternate' />
          </div>
          <a href="https://www.google.com/maps/dir//40.7668355,-111.8759418/@40.766836,-111.875942,17z?hl=en-US" target="_blank">
            <Info>Find Our Location</Info>
          </a>
          </Menu.Item>
        </div>
      </Menu>
    )
  }
}




export default Navbar;
