'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import Slider from 'react-slick';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft, faArrowRight } from '@fortawesome/free-solid-svg-icons';

import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './slider.scss';

import { slidesProjects } from '@/app/constants';
import image from '@/public/images/image1.jpg';

type ArrowProps = {
  onClick?: () => void;
};

export default function SliderProjects() {
  const [currentSlide, setCurrentSlide] = useState<number>(0);
  const settings = {
    dots: false,
    infinite: true,
    speed: 300,
    slidesToShow: 3,
    slidesToScroll: 1,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    afterChange: (currentSlide: number) => setCurrentSlide(currentSlide),
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          dots: false,
        },
      },
    ],
  };

  const isDisabled = (arrow = 'next'): boolean => {
    if (arrow === 'prev') {
      return currentSlide === 0;
    }

    return currentSlide === slidesProjects.length - 1;
  };

  function NextArrow({ onClick }: ArrowProps) {
    return (
      <button
        className="invisible absolute -top-20 right-0 border-2 border-primary p-4 hover:border-navy-800 md:visible"
        type="button"
        onClick={onClick}
        disabled={isDisabled()}
      >
        <FontAwesomeIcon
          icon={faArrowRight}
          className="text-primary hover:text-navy-800"
          size="lg"
        />
      </button>
    );
  }

  function PrevArrow({ onClick }: ArrowProps) {
    return (
      <button
        className="invisible absolute -top-20 right-16 z-10 border-2 border-primary p-4 hover:border-navy-800 md:visible "
        type="button"
        onClick={onClick}
        disabled={isDisabled('prev')}
      >
        <FontAwesomeIcon
          icon={faArrowLeft}
          className="text-primary hover:text-navy-800"
          size="lg"
        />
      </button>
    );
  }

  return (
    <Slider {...settings} className="slider-main">
      {slidesProjects.map((slide) => (
        <Link
          href={slide.url}
          key={slide.title}
          className="group relative before:absolute before:h-full before:w-full before:bg-gradient-to-b before:from-transparent before:to-secondary before:transition-opacity lg:px-2 lg:before:opacity-0 lg:hover:before:opacity-100"
        >
          <Image src={image} alt={'as'} loading="lazy" />
          <div className="absolute bottom-0 pb-5 pl-5 lg:invisible lg:group-hover:visible">
            <p className="z-10 font-semibold text-white">{slide.title}</p>
          </div>
        </Link>
      ))}
    </Slider>
  );
}
