import getAllProjects, { Project } from '@/app/services/getAllProjects';
import Head from 'next/head';
import Image from 'next/image';

export default async function Page({
  params: { slug },
}: {
  params: { slug: string };
}) {
  const projects = await getAllProjects();
  const project = projects.find((project) => project.slug === slug);
  return (
    <>
      <div className="mt-lg-20 container mx-auto mt-10 px-4">
        <h1 className="mb-lg-10 mb-5 w-full text-4xl font-bold">
          {project?.title}
        </h1>
        <div className="flex flex-col gap-5 lg:flex-row lg:gap-10">
          <div className="lg:w-1/3">
            {project?.featuredImage.node?.sourceUrl && (
              <>
                <Image
                  src={project.featuredImage.node.sourceUrl}
                  alt={project.featuredImage.node?.altText}
                  height={project.featuredImage.node?.mediaDetails?.height}
                  width={project.featuredImage.node?.mediaDetails?.width}
                />
              </>
            )}
          </div>
          <div className="lg:w-2/3">
            <div
              dangerouslySetInnerHTML={{
                __html: String(project?.ProductPageFields.projectDescription),
              }}
            />
          </div>
        </div>
      </div>
    </>
  );
}
