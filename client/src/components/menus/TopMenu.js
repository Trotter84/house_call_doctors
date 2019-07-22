import React, { Component } from 'react';
import { Menu, Icon } from 'semantic-ui-react';
import Styled from 'styled-components';
import '../../index.css';


const MenuContainer = Styled(Menu)`
  background-color: #f4f4f4;
`

const Bar = Styled.div`
  max-width: 1250px;
  width: 100%;
  display: flex;
  flex-direction: row;
  margin: auto;
`

const Info = Styled.div`
  color: black;
  transition: all 200ms ease-in-out;
  :hover {
    color: #AF3120;
  }
`


class Navbar extends Component {

  render() {
    return (
      <MenuContainer id='TopMenuMenuContainer'>
        <Bar id='TopMenuBar'>
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
          <a href="https://www.google.com/maps/dir//40.7668355,-111.8759418/@40.766836,-111.875942,17z?hl=en-US" target="_blank" rel="noopener noreferrer">
            <Info>Find Our Location</Info>
          </a>
          </Menu.Item>
        </Bar>
      </MenuContainer>
    )
  }
}




export default Navbar;
