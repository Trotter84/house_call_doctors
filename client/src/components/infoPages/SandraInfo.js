import React, { Component } from 'react';
import Styled from 'styled-components';
import { Image } from 'semantic-ui-react';
import SandraBio from '../../images/SandrasInfo.png';


const WhiteSpace = Styled.div`
  height: 80px;
`


class SandraInfo extends Component {

  render() {
    return(
      <>
        <Image src={SandraBio} />
        <WhiteSpace />
      </>
    )
  }

};

export default SandraInfo;
