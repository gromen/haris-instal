import Image from 'next/image';
import Link from 'next/link';
import Slider from 'react-slick';

import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './slider.scss';

import { settingsProjects } from '@/app/shared/SliderArrows/SliderSettings';
import { useEffect, useState } from 'react';
import getAllProjects, { Project } from '@/app/services/getAllProjects';

export default function SliderProjects() {
  const [projects, setProjects] = useState<Project[]>([]);

  useEffect(() => {
    getAllProjects().then((projects) => setProjects(projects));
  }, []);
  return (
    <Slider {...settingsProjects} className="slider-main">
      {projects?.map((project: Project, index) => (
        <Link
          href={`projects/project-${++index}`}
          key={project.node.title}
          className="group relative before:absolute before:h-full before:w-full before:bg-gradient-to-b before:from-transparent before:to-secondary before:transition-opacity lg:px-2 lg:before:w-[calc(100%-15px)] lg:before:opacity-0 lg:hover:before:opacity-100"
        >
          {project.node?.featuredImage && (
            <Image
              src={project.node.featuredImage?.node.sourceUrl}
              alt={'as'}
              width={330}
              height={100}
              loading="lazy"
            />
          )}

          <div className="absolute bottom-0 pb-5 pl-5 lg:invisible lg:group-hover:visible">
            <p className="z-10 font-semibold text-white">
              {project.node.title}
            </p>
          </div>
        </Link>
      ))}
    </Slider>
  );
}
