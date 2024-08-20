import React from 'react';
import './Carousel.css';

export interface ICarouselProps {
    images?: string[];
    video?: string;
}
export default class Carousel extends React.Component<ICarouselProps> {
    render() {

        const { images, video } = this.props;
        if (images) {
            return (
                <div className="carousel">
                    <div className="carousel-inner">
                        {images.map((image: string, index: number) => {
                            return <div key={index} className={index === 0 ? 'carousel-item active' : 'carousel-item'}>
                                <img src={image} alt={`slide-${index}`} />
                            </div>
                        })}
                    </div>
                    <a className="carousel-control-prev" href="#carousel" role="button" data-slide="prev">
                        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                        <span className="sr-only">Previous</span>
                    </a>
                    <a className="carousel-control-next" href="#carousel" role="button" data-slide="next">
                        <span className="carousel-control-next-icon" aria-hidden="true"></span>
                        <span className="sr-only">Next</span>
                    </a>
                </div>
            )
        } else if (video) {
            return (
                <div className="carousel">
                    <div className="carousel-inner">
                        <div className="carousel-item active">
                            <video controls>
                                <source src={video} type="video/mp4" />
                            </video>
                        </div>
                    </div>
                </div>
            )
        } else {
            return (
                <div>Pas de média</div>
            )
        }

    }
}
