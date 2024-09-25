import React, { useState } from 'react';
import './Carousel.css';

import { ArrowBackIos, ArrowForwardIos } from '@mui/icons-material';
import { Button } from '@mui/material';

// const imagesText = [
//   'https://via.placeholder.com/800x300?text=Image+1',
//   'https://via.placeholder.com/800x300?text=Image+2',
//   'https://via.placeholder.com/800x300?text=Image+3',
// ];

export interface ICarouselProps {
  images?: string[];
  video?: string;
}

const Carousel: React.FC<ICarouselProps> = ({ images, video }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const prevSlide = () => {
    if (images) {
      setCurrentIndex((prevIndex) =>
        prevIndex === 0 ? images.length - 1 : prevIndex - 1
      );
    }
  };

  const nextSlide = () => {
    if (images) {
      setCurrentIndex((prevIndex) =>
        prevIndex === images.length - 1 ? 0 : prevIndex + 1
      );
    }
  };

  const isNextDisabled = images ? currentIndex === images.length - 1 : true;
  const isPreviousDisabled = images ? currentIndex === 0 : true;



  return (
    <div className=" w-full">
      <div className="overflow-hidden">
        {video && (
          <video
            className="w-full object-cover h-2/3"
            autoPlay
            loop
            muted
            src={video}
          />
        )}
        {images && !video &&
          <img
            key={currentIndex}
            src={images?.[currentIndex]}
            alt={`Slide ${currentIndex + 1}`}
            className="w-full object-cover hover:scale-105 transition-transform duration-500"
            style={{ height: '500px' }}
          />}
      </div>
      {images && !video && (
        <Button
          disabled={isPreviousDisabled}
          size="large"
          onClick={prevSlide}
          className="transform -translate-y-1/2"
          sx={
            {
              top: '50%',
              left: '2%',
              position: 'absolute',
              ":hover": {
                backgroundColor: 'rgba(255, 255, 255, 0.2)',
              },
              borderRadius: '50%',
              padding: '18px',
              backgroundColor: 'rgba(255, 255, 255, 0.3)',
            }
          }
        >
          <ArrowBackIos />
        </Button>)}
      {images && !video && (
        <Button
          disabled={isNextDisabled}
          size="large"
          onClick={nextSlide}
          className="transform -translate-y-1/2 "
          sx={
            {
              top: '50%',
              right: '2%',
              position: 'absolute',
              ":hover": {
                backgroundColor: 'rgba(255, 255, 255, 0.2)',
              },
              borderRadius: '50%',
              padding: '18px',
              backgroundColor: 'rgba(255, 255, 255, 0.3)',
            }
          }
        >
          <ArrowForwardIos />
        </Button>
      )}
    </div>

  );
};

export default Carousel;

