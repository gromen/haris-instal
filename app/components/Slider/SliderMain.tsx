'use client';

import Slider from 'react-slick';
import styled from 'styled-components';
import { settings } from '@/app/shared/SliderArrows/SliderSettings';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './slider.scss';

const StyledSlide = styled.div<{ $imgUrl: string }>`
  background: url(${({ $imgUrl }) => $imgUrl}) no-repeat;
  background-size: cover;
  width: 100vh;
  position: relative;
`;

export default function SliderMain() {
  return (
    <Slider {...settings} className="slider-main">
      <StyledSlide
        $imgUrl={'/slides/slide-1.jpg'}
        className="absolute mx-auto !flex h-[300px] flex-col items-center justify-center text-white before:absolute before:h-full before:w-full before:bg-black-rgba before:bg-opacity-40 lg:h-[800px]"
      >
        <div className="container z-10 flex flex-col gap-y-3 px-4 md:text-lg lg:gap-y-5 lg:text-3xl">
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
      </StyledSlide>
      <StyledSlide
        $imgUrl={'/slides/slide-2.jpg'}
        className="absolute mx-auto !flex h-[300px] flex-col items-center justify-center text-white before:absolute before:h-full before:w-full before:bg-black-rgba before:bg-opacity-40 lg:h-[800px]"
      >
        <div className="container z-10 flex flex-col gap-y-3 px-4 md:text-lg lg:gap-y-5 lg:text-3xl">
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
      </StyledSlide>
      <StyledSlide
        $imgUrl={'/slides/slide-3.jpg'}
        className="absolute mx-auto !flex h-[300px] flex-col items-center justify-center text-white before:absolute before:h-full before:w-full before:bg-black-rgba before:bg-opacity-40 lg:h-[800px]"
      >
        <div className="container z-10 flex flex-col gap-y-3 px-4 md:text-lg lg:gap-y-5 lg:text-3xl">
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
      </StyledSlide>
      <StyledSlide
        $imgUrl={'/slides/slide-4.jpg'}
        className="absolute mx-auto !flex h-[300px] flex-col items-center justify-center text-white before:absolute before:h-full before:w-full before:bg-black-rgba before:bg-opacity-40 lg:h-[800px]"
      >
        <div className="container z-10 flex flex-col gap-y-3 px-4 md:text-lg lg:gap-y-5 lg:text-3xl">
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
      </StyledSlide>
      <StyledSlide
        $imgUrl={'/slides/slide-3.jpg'}
        className="absolute mx-auto !flex h-[300px] flex-col items-center justify-center text-white before:absolute before:h-full before:w-full before:bg-black-rgba before:bg-opacity-40 lg:h-[800px]"
      >
        <div className="container z-10 flex flex-col gap-y-3 px-4 md:text-lg lg:gap-y-5 lg:text-3xl">
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
      </StyledSlide>
    </Slider>
  );
}
