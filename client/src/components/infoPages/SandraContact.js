import React, { Component } from 'react';
import Styled from 'styled-components';
import { Header, Image, Modal, Divider } from 'semantic-ui-react'
import {
  Link,
  Route,
  NavLink
} from 'react-router-dom';
import SandraProfile from '../../images/Sandra-profile.png';


const WhiteSpace = Styled.div`
  height: 80px;
`

const InfoBtn = Styled.a`
  font-size: 14px;
  font-weight: bold;
  color: #AF3120;
  padding-left: 10px;
  transition: all 200ms ease-in-out;
  :hover {
    color: black;
    cursor: pointer;
  }
`

const Info = Styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  padding-left: 35px;
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
  padding-right: 0px;
`

const Right = Styled.div`
  padding-left: 70px;
`

const styles = {
  line:{
    margin: '0 20px 6px 340px',
  },
}

class SandraContact extends Component {


  render() {
    return(
      <>
        <Modal trigger={<InfoBtn>More Info</InfoBtn>}>
          <Modal.Header>Sandra Jense</Modal.Header>
          <Modal.Content image>
            <Image wrapped src={SandraProfile} size='tiny' />
            <Modal.Description>
              <Info>
                <Left>
                  <p style={styles.info}>Office MA: <b>Terra Jacobs</b></p>
                  <p style={styles.info}>Pager: <b>(801) 485-5055</b> ext: <b>1</b></p>
                  <p style={styles.info}><Email href="mailto:Sarahjohnson@housecalldoctorsut.com">Sarahjohnson@housecalldoctorsut.com</Email></p>
                </Left>
                <Right>
                  <p style={styles.info}>Field MA: <b>Kirby Trombetti</b></p>
                  <p style={styles.info}><Email href="mailto:Kirby@housecalldoctorsut.com">Kirby@housecalldoctorsut.com</Email></p>
                </Right>
              </Info>
            </Modal.Description>
          </Modal.Content>
        </Modal>
      </>
    )
  }
};

export default SandraContact;
