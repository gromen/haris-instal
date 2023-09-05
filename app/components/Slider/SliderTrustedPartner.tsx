'use client';

import Slider from 'react-slick';

import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './sliderMain.scss';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faChevronLeft,
  faChevronRight,
} from '@fortawesome/free-solid-svg-icons';
import Image from 'next/image';

type ArrowProps = {
  onClick?: () => void;
};

export default function SliderTrustedPartner() {
  const settings = {
    dots: false,
    infinite: false,
    speed: 300,
    slidesToShow: 1,
    slidesToScroll: 1,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
  };

  function NextArrow({ onClick }: ArrowProps) {
    return (
      <button
        className="left-40 absolute top-32 border-primary border-2 p-4 hover:border-navy-800 "
        type="button"
        onClick={onClick}
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
      <Image
        src="/images/logo-trusted-partner-1.svg"
        alt="logo trusted partner"
        width="150"
        height="50"
      />
      <Image
        src="/images/logo-trusted-partner-1.svg"
        alt="logo trusted partner"
        width="150"
        height="50"
      />
      <Image
        src="/images/logo-trusted-partner-1.svg"
        alt="logo trusted partner"
        width="150"
        height="50"
      />
      <Image
        src="/images/logo-trusted-partner-1.svg"
        alt="logo trusted partner"
        width="150"
        height="50"
      />
    </Slider>
  );
}
