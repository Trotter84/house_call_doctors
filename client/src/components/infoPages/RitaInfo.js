import React, { Component } from 'react';
import Styled from 'styled-components';
import { Image } from 'semantic-ui-react';
import RitaBio from '../../images/RitasInfo.png';


const WhiteSpace = Styled.div`
  height: 80px;
`


class RitaInfo extends Component {

  render() {
    return(
      <>
        <Image src={RitaBio} />
        <WhiteSpace />
      </>
    )
  }

};

export default RitaInfo;
