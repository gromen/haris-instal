'use client';
import Heading from '@/app/components/Heading/Heading';
import SliderProjects from '@/app/components/Slider/SliderProjects';

export default function Projects() {
  return (
    <section className="container mx-auto mt-10 mt-10 px-4 md:mt-20 lg:w-2/3">
      <Heading title="Wykonane projekty" subtitle="Ostatnie Projekty" />
      <SliderProjects />
    </section>
  );
}
