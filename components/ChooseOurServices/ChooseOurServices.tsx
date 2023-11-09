import image from '@/public/images/image1.jpg';
import Image from 'next/image';
import { FaScrewdriverWrench } from 'react-icons/fa6';

export default function ChooseOurServices() {
  return (
    <section className="container mx-auto p-4 lg:p-24">
      <div className="lg:flex lg:gap-5">
        <div className="lg:w-1/3">
          <p className="pb-2 text-sm font-semibold text-primary">
            <FaScrewdriverWrench className="pr-2" />
            Dlaczego warto wybrać nasze usługi
          </p>
          <h3 className="pb-4 text-3xl font-semibold">
            Doskonałe rozwiązania dla usług hydraulicznych
          </h3>
          <div className="flex flex-col gap-5 md:flex-row">
            <article className="bg-gray-400 p-4 text-center">
              <FaScrewdriverWrench className="pb-4 text-3xl text-primary" />
              <h4 className="pb-4 font-semibold">Przystępna cena</h4>
              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
            </article>
            <article className="bg-gray-400 p-4 text-center">
              <FaScrewdriverWrench className="pb-4 text-3xl text-primary" />
              <h4 className="pb-4 font-semibold">Fachowy hydraulik</h4>
              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
            </article>
          </div>
        </div>
        <div className="lg:w-2/3">
          <Image
            className="ml-auto"
            src={image}
            alt="bg"
            width={640}
            height={400}
          />
        </div>
      </div>
    </section>
  );
}
