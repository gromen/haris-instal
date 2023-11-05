import Link from 'next/link';
import Slider from 'react-slick';

import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './slider.scss';

import { settingsProjects } from '@/app/shared/SliderArrows/SliderSettings';
import { useEffect, useState } from 'react';
import getAllProjects, { Project } from '@/app/services/getAllProjects';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSpinner } from '@fortawesome/free-solid-svg-icons';
import ExportedImage from 'next-image-export-optimizer';

export default function SliderProjects() {
  const [projects, setProjects] = useState<Project[]>([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const projectRevalidate = setInterval(() => {
      localStorage.removeItem('projects');
      fetchProjects();
    }, 300000); // every 5 minutes interval

    async function fetchProjects() {
      const projectsCached = localStorage.getItem('projects');
      if (projectsCached) {
        setProjects(JSON.parse(projectsCached));
        return;
      }
      setLoading(true);
      const projects = await getAllProjects();
      localStorage.setItem('projects', JSON.stringify(projects));
      setProjects(projects);
      setLoading(false);
    }

    fetchProjects();

    return () => {
      clearInterval(projectRevalidate);
    };
  }, []);

  return (
    <>
      {loading ? (
        <div className="flex justify-center">
          <FontAwesomeIcon
            size="3x"
            icon={faSpinner}
            className="animate-spin"
          />
        </div>
      ) : (
        <Slider {...settingsProjects} className="slider-main">
          {projects.map((project: Project) => (
            <Link
              href={`projekty/${project.slug}`}
              key={project.slug}
              className="group relative before:absolute before:h-full before:w-full before:bg-gradient-to-b before:from-transparent before:to-secondary before:transition-opacity lg:px-2 lg:before:w-[calc(100%-15px)] lg:before:opacity-0 lg:hover:before:opacity-100"
            >
              {project?.featuredImage && (
                <ExportedImage
                  src={project.featuredImage?.node.sourceUrl}
                  alt={project.featuredImage.node.altText}
                  height={
                    project.featuredImage.node.mediaDetails?.height ?? 360
                  }
                  width={project.featuredImage.node.mediaDetails?.width ?? 500}
                  loading="lazy"
                />
              )}

              <div className="absolute bottom-0 pb-5 pl-5 lg:invisible lg:group-hover:visible">
                <p className="z-10 font-semibold text-white">{project.title}</p>
              </div>
            </Link>
          ))}
        </Slider>
      )}
    </>
  );
}
