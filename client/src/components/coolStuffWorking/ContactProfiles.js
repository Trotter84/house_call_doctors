import React from 'react';
import { Grid, Image } from 'semantic-ui-react';
import MarkProfile from '../images/Mark-profile.png';
import PerrineProfile from '../images/Perrine-profile.png';
import SandraProfile from '../images/Sandra-profile.png';
import RitaProfile from '../images/Rita-profile.png';



const ContactProfile = () => (

  <Grid columns={1}>
      <Grid.Row>
          <Image src={MarkProfile} size='tiny' />
          <p>Contact <b>Mark Cacciamani, MD’s</b> Office Coordinator Directly at <a href="mailto:Terra@housecalldoctorsut.com">Terra@housecalldoctorsut.com</a></p>
      </Grid.Row>
      <Grid.Row>
          <Image src={PerrineProfile} size='tiny' />
          <p>Contact <b>NP Perrine Anderson’s</b> Office Coordinator Directly at <a href="mailto:SarahJohnson@housecalldoctorsut.com">SarahJohnson@housecalldoctorsut.com</a></p>
      </Grid.Row>
      <Grid.Row>
        <Image src={SandraProfile} size='tiny' />
        <p>Contact <b>NP Sandra Jense’s</b> Office Coordinator Directly at <a href="mailto:Terra@housecalldoctorsut.com">Terra@housecalldoctorsut.com</a></p>
      </Grid.Row>
      <Grid.Row>
        <Image src={RitaProfile} size='tiny' />
        <p>Contact <b>NP Rita Rutland’s</b> Office Coordinator Directly at <a href="mailto:Brittany@housecalldoctorsut.com">Brittany@housecalldoctorsut.com</a></p>
      </Grid.Row>

  </Grid>
)

export default ContactProfile;
