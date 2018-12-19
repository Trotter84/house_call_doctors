import React from 'react';
import { Image, Breadcrumb } from 'semantic-ui-react';
import Styled from 'styled-components';
import MarkWithPatient from '../images/markwithpatient1.jpg';


const Picture = Styled.div`
  background-image: src={MarkWithPatient};
`


const ImageDivider = () => (

  <Picture>
    <Breadcrumb>
      <Breadcrumb.Section link>Home</Breadcrumb.Section>
      <Breadcrumb.Divider icon='right angle' />
      <Breadcrumb.Section link>Store</Breadcrumb.Section>
      <Breadcrumb.Divider icon='right angle' />
      <Breadcrumb.Section active>T-Shirt</Breadcrumb.Section>
    </Breadcrumb>
  </Picture>
)

export default ImageDivider;
