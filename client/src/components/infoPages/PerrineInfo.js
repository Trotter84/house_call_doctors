import React, { Component } from 'react';
import Styled from 'styled-components';
import { Image } from 'semantic-ui-react';
import PerrineBio from '../../images/PerrinesInfo.png';


const WhiteSpace = Styled.div`
  height: 80px;
`


class PerrineInfo extends Component {

  render() {
    return(
      <>
        <Image src={PerrineBio} />
        <WhiteSpace />
      </>
    )
  }

};

export default PerrineInfo;
