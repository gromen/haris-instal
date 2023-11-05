import Link from 'next/link';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';

type HeadingHeroProps = {
  title: string;
  breadcrumb: string;
};

const StyledHeading = styled.section`
  background-image: url('/images/slide-5.jpg');
  background-size: cover;
  width: 100%;
`;

export default function HeadingHero({ title, breadcrumb }: HeadingHeroProps) {
  return (
    <StyledHeading className="relative py-5 lg:py-20">
      <div className="absolute inset-0 h-full w-full bg-secondary bg-opacity-50"></div>
      <div className="container relative mx-auto p-4">
        <h1 className="mb-4 text-2xl font-semibold text-white lg:mb-8 lg:text-7xl">
          {title}
        </h1>
        <ul className="flex text-xl font-semibold text-primary max-md:text-sm">
          <li className="text-primary">
            <Link href="/">Home</Link>
          </li>
          <li className="px-2">
            <FontAwesomeIcon icon={faArrowRight} className="text-sm" />
          </li>
          <li>{breadcrumb}</li>
        </ul>
      </div>
    </StyledHeading>
  );
}
