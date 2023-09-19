'use client';

import Image from 'next/image';
import Link from 'next/link';
import Slider from 'react-slick';

import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './slider.scss';

import { slidesProjects } from '@/app/constants';
import image from '@/public/images/image1.jpg';
import { settingsProjects } from '@/app/shared/SliderArrows/SliderSettings';

export default function SliderProjects() {
  // TODO add disabled state for navigation arrows
  // const [currentSlide, setCurrentSlide] = useState<number>(0);
  //
  // const isDisabled = (arrow = 'next'): boolean => {
  //   if (arrow === 'prev') {
  //     return currentSlide === 0;
  //   }
  //
  //   return (
  //     currentSlide === slidesProjects.length - 1 && !settingsProjects.infinite
  //   );
  // };

  return (
    <Slider {...settingsProjects} className="slider-main">
      {slidesProjects.map((slide) => (
        <Link
          href={slide.url}
          key={slide.title}
          className="before:transition-opacity group relative before:absolute before:h-full before:w-full before:bg-gradient-to-b before:from-transparent before:to-secondary lg:px-2 lg:before:w-[calc(100%-15px)] lg:before:opacity-0 lg:hover:before:opacity-100"
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