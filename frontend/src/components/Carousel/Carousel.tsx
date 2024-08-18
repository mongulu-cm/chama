import { Button, IconButton } from '@mui/material';
import React, { Component } from 'react'
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';

export interface ICarouselProps {
  components: JSX.Element[];
  intervalPlay?: number;
}

export interface ICarouselState {
  currentIndex: number;
}

export default class Carousel extends Component<ICarouselProps, ICarouselState> {

  private interval: any;

  constructor(props: ICarouselProps) {
    super(props);
    this.state = {
      currentIndex: 0
    }
  }

  componentDidMount(): void {
    this.interval = setInterval(() => {
      if (this.canGoToNext()) {
        this.goToNext();
      } else {
        this.setState({ currentIndex: 0 });
        this.scrollToCurrentIndex(0);
      }
    }, this.props.intervalPlay || 10000);
  }

  componentWillUnmount(): void {
    clearInterval(this.interval);
  }

  private canGoToNext(): boolean {
    return this.state.currentIndex < this.props.components.length - 1;
  }

  private canGoToPrevious(): boolean {
    return this.state.currentIndex > 0;
  }

  private goToNext = () => {
    if (this.canGoToNext()) {
      this.setState({ currentIndex: this.state.currentIndex + 1 });
      this.scrollToCurrentIndex(this.state.currentIndex + 1);
    }
  }

  private goToPrevious = () => {
    if (this.canGoToPrevious()) {
      this.setState({ currentIndex: this.state.currentIndex - 1 });
      this.scrollToCurrentIndex(this.state.currentIndex - 1);
    }
  }

  private scrollToCurrentIndex(index: number) {
    const element = document.getElementById('comp-' + index);
    const carouselContent = document.getElementById('carousel-content');

    if (element && carouselContent) {
      carouselContent.scrollTo({ behavior: 'smooth', left: element.offsetLeft - carouselContent.offsetLeft });
    }
  }

  render() {
    return (
      <div className="flex gap-6 item-center max-w-full">
        <div className='flex items-center justify-center'>
          <IconButton color="primary" aria-label="previous" disabled={!this.canGoToPrevious()} onClick={() => this.goToPrevious()}>
            <ArrowBackIosIcon />
          </IconButton>
        </div>
        <div className='flex gap-4 flex-nowrap overflow-x-hidden py-4 basic-1/4' id='carousel-content'>
          {this.props.components.map((component, index) => {
            return (
              <div key={index} id={'comp-' + index} className='flex flex-1' style={{ minWidth: '30%' }}>
                {component}
              </div>
            )
          })}
        </div>
        <div className='flex items-center justify-center'>
          <IconButton color="primary" aria-label="next" disabled={!this.canGoToNext()} onClick={() => this.goToNext()}>
            <ArrowForwardIosIcon />
          </IconButton>
        </div>
      </div>
    )
  }
}
