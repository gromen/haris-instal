import Image from 'next/image';

export default function TrustedPartner() {
  return (
    <section className="container mx-auto flex">
      <div className="bg-primary p-4 text-white">
        <p>Our trusted partner</p>
        <h3>The Brands We Work With and Believe In...</h3>
      </div>
      <div className="bg-gray-400 flex grow p-4 justify-around">
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
      </div>
    </section>
  );
}
