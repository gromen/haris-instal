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
      <Head>
        <title>{slug} | Haris Instal</title>
      </Head>
      <div className="mt-lg-20 container mx-auto mt-10">
        <h1 className="mb-lg-10 mb-5 w-full text-4xl font-bold">
          {project?.title}
        </h1>
        <div className="flex gap-10">
          <div>
            {project?.featuredImage.node?.sourceUrl && (
              <Image
                src={project.featuredImage.node.sourceUrl}
                alt={project.ProductPageFields.projectImage.altText}
                height={
                  project.ProductPageFields.projectImage.mediaDetails.height
                }
                width={
                  project.ProductPageFields.projectImage.mediaDetails.width
                }
              />
            )}
          </div>
          <div>
            <p
              dangerouslySetInnerHTML={{
                __html: String(project?.ProductPageFields?.projectDescription),
              }}
            />
          </div>
        </div>
      </div>
    </>
  );
}
