import React, { PropTypes, Component } from 'react';
import CarouselContainer from './CarouselContainer';
import Wrapper from './Wrapper';
import CarouselSlot from './CarouselSlot';


class Carousel extends Component {
  render() {
    const { title, children } = this.props

    return (
      <div>
        <h2>{ title }</h2>

        <Wrapper>
          <CarouselContainer>
            { children.map((child, index) => (
              <CarouselSlot key={ index }>{child}</CarouselSlot>
            )) }
          </CarouselContainer>
        </Wrapper>
      </div>
    )
  }
}

Carousel.propTypes = {
  title: PropTypes.string,
  children: PropTypes.node
};

export default Carousel;
