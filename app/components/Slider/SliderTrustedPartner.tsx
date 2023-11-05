'use client';

import Slider from 'react-slick';

import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './slider.scss';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faChevronLeft,
  faChevronRight,
} from '@fortawesome/free-solid-svg-icons';
import { useState } from 'react';
import { slides } from '@/app/constants';
import ExportedImage from 'next-image-export-optimizer';

type ArrowProps = {
  onClick?: () => void;
};

export default function SliderTrustedPartner() {
  const [currentSlide, setCurrentSlide] = useState<number>(0);
  const settings = {
    dots: false,
    infinite: false,
    speed: 300,
    slidesToShow: 1,
    slidesToScroll: 1,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    afterChange: (currentSlide: number) => setCurrentSlide(currentSlide),
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          autoplay: false,
          arrows: false,
          dots: false,
        },
      },
    ],
  };

  const isDisabled = (arrow = 'next'): boolean => {
    if (arrow === 'prev') {
      return currentSlide === 0;
    }

    return currentSlide === slides.length - 1;
  };

  function NextArrow({ onClick }: ArrowProps) {
    return (
      <button
        className="absolute left-40 top-32 border-2 border-primary p-4 hover:border-navy-800"
        type="button"
        onClick={onClick}
        disabled={isDisabled()}
      >
        <FontAwesomeIcon
          icon={faChevronRight}
          className="text-primary hover:text-navy-800"
          size="lg"
        />
      </button>
    );
  }

  function PrevArrow({ onClick }: ArrowProps) {
    return (
      <button
        className="absolute left-40 top-52 z-10 border-2 border-primary p-4 hover:border-navy-800 "
        type="button"
        onClick={onClick}
        disabled={isDisabled('prev')}
      >
        <FontAwesomeIcon
          icon={faChevronLeft}
          className="text-primary hover:text-navy-800"
          size="lg"
        />
      </button>
    );
  }

  return (
    <Slider {...settings} className="slider-main">
      {slides.map((slide) => (
        <ExportedImage
          key={slide.id}
          src={slide.url}
          alt={slide.alt}
          width="150"
          height="50"
        />
      ))}
    </Slider>
  );
}
