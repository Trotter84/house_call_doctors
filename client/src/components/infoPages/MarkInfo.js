import React, { Component } from 'react';
import Styled from 'styled-components';
import { Image } from 'semantic-ui-react';
import MarkBio from '../../images/MarksInfo.png';


const WhiteSpace = Styled.div`
  height: 80px;
`


class MarkInfo extends Component {

  render() {
    return(
      <>
        <Image src={MarkBio} />
        <WhiteSpace />

      </>
    )
  }

};

export default MarkInfo;
