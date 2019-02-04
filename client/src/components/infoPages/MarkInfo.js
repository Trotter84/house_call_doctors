import React, { Component } from 'react';
import Styled from 'styled-components';
import { Image } from 'semantic-ui-react';
import MarkBio from '../../images/MarksInfo.png';


const WhiteSpace = Styled.div`
  height: 80px;
`

const BlackBox = Styled.div`
  height: 500px;
  background-color: black;
`


class MarkInfo extends Component {

  render() {
    return(
      <>
        <BlackBox>
        </BlackBox>

      </>
    )
  }

};

export default MarkInfo;
