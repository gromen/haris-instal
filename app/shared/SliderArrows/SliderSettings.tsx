import {
  NextArrow,
  NextArrowProjects,
  PrevArrow,
  PrevArrowProjects,
} from '@/app/shared/SliderArrows/SliderArrows';

export const settings = {
  dots: false,
  fade: true,
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
  nextArrow: <NextArrow />,
  prevArrow: <PrevArrow />,
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

export const settingsProjects = {
  dots: false,
  infinite: true,
  speed: 300,
  slidesToShow: 3,
  slidesToScroll: 1,
  nextArrow: <NextArrowProjects />,
  prevArrow: <PrevArrowProjects />,
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
