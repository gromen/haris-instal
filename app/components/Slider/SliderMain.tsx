'use client';
import Image from 'next/image';
import Slider from 'react-slick';

import img from '@/public/slides/slide-5.jpg';
import img1 from '@/public/slides/slide-2.jpg';
import img2 from '@/public/slides/slide-3.jpg';
import img3 from '@/public/slides/slide-4.jpg';
import img4 from '@/public/slides/slide-1.jpg';
import { settings } from '@/app/shared/SliderArrows/SliderSettings';

import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './slider.scss';

export default function SliderMain() {
  return (
    <Slider {...settings} className="slider-main">
      <div className="relative">
        <Image
          className="mx-auto"
          src={img}
          alt={'img'}
          style={{ objectFit: 'cover' }}
        />
        <div className="absolute top-0 z-10 h-full w-full bg-secondary bg-opacity-50 p-4 text-white">
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
        <Image
          className="mx-auto"
          src={img1}
          alt={'img'}
          style={{ objectFit: 'cover' }}
        />
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
        <Image
          className="mx-auto"
          src={img2}
          alt={'img'}
          style={{ objectFit: 'cover' }}
        />
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
        <Image
          className="mx-auto"
          src={img3}
          alt={'img'}
          style={{ objectFit: 'cover' }}
        />
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
        <Image
          className="mx-auto"
          src={img4}
          alt={'img'}
          style={{ objectFit: 'cover' }}
        />
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
