import React, { Component } from 'react';
import { Menu, Icon } from 'semantic-ui-react';


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
            Caitlin@housecalldoctorsut.com
          </a>
          </Menu.Item>

          <Menu.Item>
          <div>
            <Icon size='small' name='map marker alternate' />
          </div>
            Find our Location
          </Menu.Item>
        </div>
      </Menu>
    )
  }
}




export default Navbar;
