import React, { Component } from 'react';
import {
  Carousel,
  CarouselItem,
  CarouselControl,
  CarouselIndicators,
  CarouselCaption
} from 'reactstrap';

const items = [
  {
    src: 'https://cdn.shopify.com/s/files/1/0246/1030/8171/products/709062_3812108e-e4dc-404d-a510-07ce5728d556_1800x1800.jpg?v=1673456429',
    altText: 'Slide 1',
    caption: 'Slide 1'
  },
  {
    src: 'https://media.istockphoto.com/id/657826684/photo/surgical-instruments-in-operating-room.jpg?s=612x612&w=is&k=20&c=yk7xgyJ1rXW-RWSSypx5W0hrKnPe7R7E4laK6DjHqJo=',
    altText: 'Slide 2',
    caption: 'Slide 2'
  },
  {
    src: 'https://media.istockphoto.com/id/1279382565/photo/verbrugge-bone-holding-forceps.jpg?s=612x612&w=is&k=20&c=2mcbueylLrvFrWEKjo8gp25ygXfjfapZjmxxWSbkzC0=',
    altText: 'Slide 3',
    caption: 'Slide 3'
  }
];

class CarouselComponent extends Component {
  constructor(props) {
    super(props);
    this.state = { activeIndex: 0 };
    this.next = this.next.bind(this);
    this.previous = this.previous.bind(this);
    this.goToIndex = this.goToIndex.bind(this);
    this.onExiting = this.onExiting.bind(this);
    this.onExited = this.onExited.bind(this);
  }

  onExiting() {
    this.animating = true;
  }

  onExited() {
    this.animating = false;
  }

  next() {
    if (this.animating) return;
    const nextIndex = this.state.activeIndex === items.length - 1 ? 0 : this.state.activeIndex + 1;
    this.setState({ activeIndex: nextIndex });
  }

  previous() {
    if (this.animating) return;
    const nextIndex = this.state.activeIndex === 0 ? items.length - 1 : this.state.activeIndex - 1;
    this.setState({ activeIndex: nextIndex });
  }

  goToIndex(newIndex) {
    if (this.animating) return;
    this.setState({ activeIndex: newIndex });
  }

  render() {
    const { activeIndex } = this.state;

    const slides = items.map((item) => {
      return (
        <CarouselItem
          onExiting={this.onExiting}
          onExited={this.onExited}
          key={item.src}
        >
          <img src={item.src} alt={item.altText} />
          <CarouselCaption captionText={item.caption} captionHeader={item.caption} />
        </CarouselItem>
      );
    });

    return (
      <Carousel
        activeIndex={activeIndex}
        next={this.next}
        previous={this.previous}
      >
        <CarouselIndicators items={items} activeIndex={activeIndex} onClickHandler={this.goToIndex} />
        {slides}
        <CarouselControl direction="prev" directionText="Previous" onClickHandler={this.previous} />
        <CarouselControl direction="next" directionText="Next" onClickHandler={this.next} />
      </Carousel>
    );
  }
}


export default CarouselComponent;