'use client';
import Image from 'next/image';
import useWindowSize from '@/app/hooks/useWindowSize';
import SliderTrustedPartner from '@/components/Slider/SliderTrustedPartner';

export default function TrustedPartner() {
  const [isMobile] = useWindowSize();

  const images = isMobile ? (
    <SliderTrustedPartner />
  ) : (
    <>
      <Image
        src="/images/logo-trusted-partner-1.svg"
        alt="logo trusted partner"
        width="150"
        height="50"
      />
      <Image
        src="/images/logo-trusted-partner-1.svg"
        alt="logo trusted partner"
        width="150"
        height="50"
      />
      <Image
        src="/images/logo-trusted-partner-1.svg"
        alt="logo trusted partner"
        width="150"
        height="50"
      />
      <Image
        src="/images/logo-trusted-partner-1.svg"
        alt="logo trusted partner"
        width="150"
        height="50"
      />
    </>
  );

  return (
    <section className="container mx-auto lg:flex">
      <div className="bg-primary p-4 text-white">
        <p>Nasi zaufani partnerzy</p>
        <h3>Marki z którymi współpracujemy i w które wierzymy...</h3>
      </div>
      <div className="grow bg-gray-400 p-4 md:flex md:flex-row md:justify-around">
        {images}
      </div>
    </section>
  );
}
