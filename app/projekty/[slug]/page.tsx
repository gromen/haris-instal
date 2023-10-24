import Image from 'next/image';
import { Metadata } from 'next';
import fetchGraphql from '@/app/utils/fetchGraphql';
import { getProjectBySlug } from '@/app/constants/graphqlQueries';

type Props = {
  params: { slug: string };
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const slug = params.slug;
  const result = await fetchGraphql(getProjectBySlug, { slug });
  const project = result.data.projectBy;

  return {
    title: `${project?.title} | Haris Instal`,
    description: ' ',
  };
}

export default async function Page({
  params: { slug },
}: {
  params: { slug: string };
}) {
  const result = await fetchGraphql(getProjectBySlug, { slug });
  const project = result.data.projectBy;

  return (
    <>
      <div className="mt-lg-20 container mx-auto mt-10 px-4">
        <h1 className="mb-lg-10 mb-5 w-full text-4xl font-bold">
          {project?.title}
        </h1>
        <div className="flex flex-col gap-5 lg:flex-row lg:gap-10">
          <div className="lg:w-1/3">
            {project?.featuredImage?.node.sourceUrl && (
              <>
                <Image
                  src={project.featuredImage?.node.sourceUrl}
                  alt={project.featuredImage?.node.altText}
                  height={project.featuredImage?.node.mediaDetails?.height}
                  width={project.featuredImage?.node.mediaDetails?.width}
                />
              </>
            )}
          </div>
          <div className="lg:w-2/3">
            <div
              dangerouslySetInnerHTML={{
                __html: String(project?.content),
              }}
            />
          </div>
        </div>
      </div>
    </>
  );
}
