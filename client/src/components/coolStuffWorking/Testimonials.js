import React, { Component } from 'react';
import Styled from 'styled-components';
import Carousel from './Carousel';

const Item = Styled.div`
  background: #AF3120;
  text-align: center;
  padding: 50px;
  color: white;
`

export default class Testimonials extends Component {
  render() {
    return(
      <div>
        <Carousel title="Carousel">
          <Item>Item1</Item>
          <Item>Item2</Item>
          <Item>Item3</Item>
          <Item>Item4</Item>
        </Carousel>
      </div>
    );
  }
}
