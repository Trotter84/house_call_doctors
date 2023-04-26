import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Styled from 'styled-components';
import { Icon } from 'semantic-ui-react';


const Icons = Styled(Icon)`
  transition: all 200ms ease-in-out;
  &:hover,&.active {
    color: #AF3120;
  }
`


class BottomMenuMobile extends Component {
  render() {
    return(
      <div id='bottomMenuMainContainer'>
        <Link to={'/'} aria-current='page' className='iconContainers'>
          <Icons className='icons' name="home">
            <p className='bottomMenuText'>Home</p>
          </Icons>
        </Link>
        <div className='vl' />
        <Link to={'/about-us'} aria-current='page' className='iconContainers'>
          <Icons className='icons' name="users">
            <p className='bottomMenuText'>About Us</p>
          </Icons>
        </Link>
        <div className='vl' />
        <Link to={'/our-providers'} aria-current='page' className='iconContainers'>
          <Icons className='icons' name="user md">
            <p className='bottomMenuText'>Providers</p>
          </Icons>
        </Link>
        <div className='vl' />
        <Link to={'/our-services'} aria-current='page' className='iconContainers'>
          <Icons className='icons' name="medkit">
            <p className='bottomMenuText'>Services</p>
          </Icons>
        </Link>
        <div className='vl' />
        <Link to={'/our-privacy-policy'} aria-current='page' className='iconContainers'>
          <Icons className='icons' name="lock">
            <p className='bottomMenuText'>Privacy Policy</p>
          </Icons>
        </Link>
        <div className='vl' />
        <Link to={'/contact-us'} aria-current='page' className='iconContainers'>
          <Icons className='icons' size='' name="comments">
            <p className='bottomMenuText'>Contact Us</p>
          </Icons>
        </Link>
      </div>
    )
  }
}


export default BottomMenuMobile;
