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
    <b>Rita Rutland, APRN</b>
    <Divider style={styles.line} />
  </Names>

)



const options = [
  {
    text: (
      <span>
        <p style={styles.info}>Office MA: <b>Brittany Robb</b></p>
        <p style={styles.info}>Pager: <b>(801) 485-5055</b> ext: <b>3</b></p>
        <p style={styles.info}><a href="mailto:Brittany@housecalldoctorsut.com">Brittany@housecalldoctorsut.com</a></p>
        <Divider />
        <p style={styles.info}>Field MA: <b>Peter Haight</b></p>
        <p style={styles.info}><a href="mailto:Peter@housecalldoctorsut.com">Peter@housecalldoctorsut.com</a></p>
      </span>
    ),
  },
]

const RitaDropdownMenu = () => <Dropdown trigger={trigger} options={options} />



export default RitaDropdownMenu;
