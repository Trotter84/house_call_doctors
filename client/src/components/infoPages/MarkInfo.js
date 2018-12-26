import React, { Component } from 'react';
import Styled from 'styled-components';

const MainContainer = Styled.div`
  width: 1250px;
  margin: auto;
`

const WhiteSpace = Styled.div`
  height: 80px;
`


class MarkInfo extends Component {

  render() {
    return(
      <>
        <MainContainer>
          <h1> Hello </h1>
        </MainContainer>
        <WhiteSpace />

      </>
    )
  }

};

export default MarkInfo;
