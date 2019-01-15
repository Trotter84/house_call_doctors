import React, { Component } from 'react';
import Styled from 'styled-components';
import { Image, Divider } from 'semantic-ui-react';
import {
  Link,
  Route,
  NavLink
} from 'react-router-dom';


const WhiteSpace = Styled.div`
  height: 80px;
`

const Info = Styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
`

const Email = Styled.a`
  font-size: 13px;
  color: #AF3120;
  transition: all 200ms ease-in-out;
  :hover {
    color: black;
  }
`

const Name = Styled.h4`
  display: flex;
  flex-direction: row;
  justify-content: center;
`

const Left = Styled.div`
  padding-right: 25px;
`

const Right = Styled.div`
  padding-left: 25px;
`

const styles = {
  line:{
    margin: '0 320px 6px 20px',
  },
}


class RitaContact extends Component {

    render() {
      return(
        <>
          <Divider style={styles.line} />
          <Name>
            <h4>Rita Rutland</h4>
          </Name>
          <Info>
            <Left>
              <p style={styles.info}>Office MA: <b>Brittany Robb</b></p>
              <p style={styles.info}>Pager: <b>(801) 485-5055</b> ext: <b>3</b></p>
              <p style={styles.info}><Email href="mailto:Brittany@housecalldoctorsut.com">Brittany@housecalldoctorsut.com</Email></p>
            </Left>
            <Right>
              <p style={styles.info}>Field MA: <b>Peter Haight</b></p>
              <p style={styles.info}><Email href="mailto:Peter@housecalldoctorsut.com">Peter@housecalldoctorsut.com</Email></p>
            </Right>
          </Info>
        </>
      )
    }

  };

  export default RitaContact;
