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
import Image from 'next/image';
import { useState } from 'react';

type ArrowProps = {
  onClick?: () => void;
};

const slides = [
  {
    id: 'slide-1',
    url: '/images/logo-trusted-partner-1.svg',
    alt: 'logo trusted partner',
  },
  {
    id: 'slide-2',
    url: '/images/logo-trusted-partner-1.svg',
    alt: 'logo trusted partner',
  },
  {
    id: 'slide-3',
    url: '/images/logo-trusted-partner-1.svg',
    alt: 'logo trusted partner',
  },
  {
    id: 'slide-4',
    url: '/images/logo-trusted-partner-1.svg',
    alt: 'logo trusted partner',
  },
];

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
        className="left-40 absolute top-32 border-primary border-2 p-4 hover:border-navy-800"
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
        className="left-40 absolute z-10 top-52 border-primary border-2 p-4 hover:border-navy-800 "
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
        <Image
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
