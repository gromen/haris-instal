import Image from 'next/image';

export interface SlideBannerProps {
  url: string;
  heading: string;
  subheading: string;
}

export default function SlideBanner({
  url,
  heading,
  subheading,
}: SlideBannerProps) {
  return (
    <div className="mx-auto !flex h-[300px] flex-col items-center justify-center text-white before:absolute before:h-full before:w-full before:bg-black-rgba before:bg-opacity-40 lg:h-[800px]">
      <Image
        src={url}
        alt="main banner slide"
        width="1920"
        height="400"
        loading="eager"
        priority={true}
      />
      <div className="container absolute z-10 flex flex-col gap-y-3 px-4 md:text-lg lg:gap-y-5 lg:text-3xl">
        <h2 className="font-bold">{heading}</h2>
        <small>{subheading}</small>
        <div className="flex">
          <button
            type="button"
            className="border-2 border-primary bg-primary px-4 py-2 text-white"
          >
            Nasze Usługi
          </button>
        </div>
      </div>
    </div>
  );
}
