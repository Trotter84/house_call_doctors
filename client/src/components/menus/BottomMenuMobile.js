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
        <Link to={'/home'} className='iconContainers'>
          <Icons className='icons' size='' name="home">
            <p className='bottomMenuText'>Home</p>
          </Icons>
        </Link>
        <div className='vl' />
        <Link to={'/about-us'} className='iconContainers'>
          <Icons className='icons' size='' name="user">
            <p className='bottomMenuText'>About Us</p>
          </Icons>
        </Link>
        <div className='vl' />
        <Link to={'/our-providers'} className='iconContainers'>
          <Icons className='icons' size='' name="user med">
            <p className='bottomMenuText'>Providers</p>
          </Icons>
        </Link>
        <div className='vl' />
        <Link to={'/our-services'} className='iconContainers'>
          <Icons className='icons' size='' name="!!!!!">
            <p className='bottomMenuText'>Services</p>
          </Icons>
        </Link>
        <div className='vl' />
        <Link to={'/our-providers'} className='iconContainers'>
          <Icons className='icons' size='' name="!!!!!!">
            <p className='bottomMenuText'>Privacy Policy</p>
          </Icons>
        </Link>
        <div className='vl' />
        <Link to={'/contact-us'} className='iconContainers'>
          <Icons className='icons' size='' name="comments">
            <p className='bottomMenuText'>Contact Us</p>
          </Icons>
        </Link>
      </div>
    )
  }
}


export default BottomMenuMobile;
