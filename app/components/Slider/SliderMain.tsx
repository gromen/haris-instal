'use client';

import Image from 'next/image';
import Slider from 'react-slick';

import './sliderMain.scss';
import styled from 'styled-components';

import slide1 from '@/public/slides/slide-1.jpg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faChevronLeft,
  faChevronRight,
} from '@fortawesome/free-solid-svg-icons';

const StyledSlide = styled.div<{ imgUrl: string }>`
  background: url(${({ imgUrl }) => imgUrl}) no-repeat;
  background-size: contain;
  width: 100vw;
  height: 100vh;
  position: relative;
  z-index: 1;
  display: flex !important;
  justify-content: center;
  align-content: center;
`;

type ArrowProps = {
  onClick?: () => void;
};

export default function SliderMain() {
  const settings = {
    dots: true,
    fade: true,
    infinite: false,
    speed: 500,
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
      <StyledSlide imgUrl={'/slides/slide-1.jpg'}>
        <div>
          <h2>We provide Effective Plumbing Solution</h2>
          <small>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam
            consectetur debitis deleniti dolores error est facere fuga incidunt,
            laboriosam magnam necessitatibus, officia optio perferendis quia
            quisquam reiciendis reprehenderit similique voluptas.
          </small>
          <div className="flex">
            <button
              type="button"
              className="bg-primary text-white  py-2 px-4 mr-5"
            >
              Discover more
            </button>
            <button
              type="button"
              className="bg-transparent text-white border-primary border-2 py-2 px-4"
            >
              Nasze Usługi
            </button>
          </div>
        </div>
      </StyledSlide>
      <div>
        <Image src={slide1} alt="slide 2" />
      </div>
      <div>
        <Image src={slide1} alt="slide 3" />
      </div>
      <div>
        <Image src={slide1} alt="slide 4" />
      </div>
    </Slider>
  );
}
