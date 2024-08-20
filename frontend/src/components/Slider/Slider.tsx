import { IconButton } from '@mui/material';
import React from 'react'
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';

export interface ISliderProps {
  components: JSX.Element[];
  intervalPlay?: number;
}

export interface ISliderState {
  currentIndex: number;
}

export default class Slider extends React.Component<ISliderProps, ISliderState> {

  private interval: any;

  constructor(props: ISliderProps) {
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
    const sliderContent = document.getElementById('slider-content');

    if (element && sliderContent) {
      sliderContent.scrollTo({ behavior: 'smooth', left: element.offsetLeft - sliderContent.offsetLeft });
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
        <div className='flex gap-4 flex-nowrap overflow-x-hidden py-4 basic-1/4' id='slider-content'>
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
