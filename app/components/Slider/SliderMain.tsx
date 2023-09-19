'use client';
import Slider from 'react-slick';

import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './slider.scss';

import styled from 'styled-components';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faChevronLeft,
  faChevronRight,
} from '@fortawesome/free-solid-svg-icons';
import Image from 'next/image';
import img from '@/public/slides/slide-5.jpg';
import img1 from '@/public/slides/slide-2.jpg';
import img2 from '@/public/slides/slide-3.jpg';
import img3 from '@/public/slides/slide-4.jpg';
import img4 from '@/public/slides/slide-1.jpg';

const StyledSlide = styled.div<{ $imgUrl: string }>`
  background: url(${({ $imgUrl }) => $imgUrl}) no-repeat;
  background-size: cover;
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
    dots: false,
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
        className="absolute left-40 top-32 border-2 border-primary p-4 hover:border-navy-800 "
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
        className="absolute left-40 top-52 z-10 border-2 border-primary p-4 hover:border-navy-800 "
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
      <div className="relative">
        <Image src={img} alt={'img'} objectFit="cover" />
        <div className="left top-50 absolute -translate-y-16 p-4 lg:w-1/2">
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
              className="mr-5 bg-primary px-4 py-2 text-white"
            >
              Discover more
            </button>
            <button
              type="button"
              className="border-2 border-primary bg-transparent px-4 py-2 text-white"
            >
              Nasze Usługi
            </button>
          </div>
        </div>
      </div>
      <div className="relative">
        <Image src={img1} alt={'img'} objectFit="cover" />
        <div className="absolute">
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
              className="mr-5 bg-primary  px-4 py-2 text-white"
            >
              Discover more
            </button>
            <button
              type="button"
              className="border-2 border-primary bg-transparent px-4 py-2 text-white"
            >
              Nasze Usługi
            </button>
          </div>
        </div>
      </div>
      <div className="relative">
        <Image src={img2} alt={'img'} objectFit="cover" />
        <div className="absolute">
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
              className="mr-5 bg-primary  px-4 py-2 text-white"
            >
              Discover more
            </button>
            <button
              type="button"
              className="border-2 border-primary bg-transparent px-4 py-2 text-white"
            >
              Nasze Usługi
            </button>
          </div>
        </div>
      </div>
      <div className="relative">
        <Image src={img3} alt={'img'} objectFit="cover" />
        <div className="absolute">
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
              className="mr-5 bg-primary  px-4 py-2 text-white"
            >
              Discover more
            </button>
            <button
              type="button"
              className="border-2 border-primary bg-transparent px-4 py-2 text-white"
            >
              Nasze Usługi
            </button>
          </div>
        </div>
      </div>{' '}
      <div className="relative">
        <Image src={img4} alt={'img'} objectFit="cover" />
        <div className="absolute">
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
              className="mr-5 bg-primary  px-4 py-2 text-white"
            >
              Discover more
            </button>
            <button
              type="button"
              className="border-2 border-primary bg-transparent px-4 py-2 text-white"
            >
              Nasze Usługi
            </button>
          </div>
        </div>
      </div>
    </Slider>
  );
}
