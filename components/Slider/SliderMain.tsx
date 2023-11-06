'use client';

import Slider from 'react-slick';
import { settings } from '@/app/shared/SliderArrows/SliderSettings';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './slider.scss';
import { slidesBanner } from '@/app/constants';
import SlideBanner, { SlideBannerProps } from '@/components/Slider/SlideBanner';

export default function SliderMain() {
  return (
    <Slider {...settings} className="slider-main">
      {slidesBanner.map(({ url, heading, subheading }: SlideBannerProps) => (
        <SlideBanner
          key={heading}
          url={url}
          heading={heading}
          subheading={subheading}
        />
      ))}
    </Slider>
  );
}
