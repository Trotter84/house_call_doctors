import React from 'react';
import {
  Dropdown,
  Icon,
  Divider
} from 'semantic-ui-react';
import Styled from 'styled-components';


const Names = Styled.p`
  font-size: 14px;
  padding-left: 5px;
  max-width: 350px;
  :hover {
    color: #606060;
  }
`

const styles = {
  info:{
    fontSize: '14px',
    paddingLeft: '5px',
    maxWidth: '350px',
  },

  line:{
    margin: '6px 0 6px 0',
  },
}


const trigger = (
  <Names>
    <br />
    <b>Perrine Anderson, GNP</b>
    <Divider style={styles.line} />
  </Names>

)



const options = [
  {
    text: (
      <span>
        <p style={styles.info}>Office MA: <b>Sarah Johnson</b></p>
        <p style={styles.info}>Pager: <b>(801) 485-5055</b> ext: <b>2</b></p>
        <p style={styles.info}><a href="mailto:Sarahjohnson@housecalldoctorsut.com">Sarahjohnson@housecalldoctorsut.com</a></p>
        <Divider />
        <p style={styles.info}>Field MA: <b>Courtney Leonard</b></p>
        <p style={styles.info}><a href="mailto:Courtney@housecalldoctorsut.com">Courtney@housecalldoctorsut.com</a></p>
      </span>
    ),
  },
]

const PerrineDropdownMenu = () => <Dropdown trigger={trigger} options={options} />



export default PerrineDropdownMenu;
