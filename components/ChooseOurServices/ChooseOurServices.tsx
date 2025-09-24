import image from '@/public/images/image1.jpg';
import Image from 'next/image';
import { FaScrewdriverWrench } from 'react-icons/fa6';
import Heading from '@/components/Heading/Heading';

export default function ChooseOurServices() {
  return (
    <section className="container mx-auto p-4 lg:p-24">
      <div className="lg:flex lg:gap-5">
        <div className="lg:w-2/3">
          <Heading
            title="Doskonałe rozwiązania dla usług hydraulicznych"
            subtitle="Dlaczego warto wybrać nasze usługi"
            icon={FaScrewdriverWrench}
            subtitleClasses="flex items-center pb-2 text-sm font-semibold text-primary lg:text-lg"
            titleClasses="pb-4 text-3xl font-semibold lg:pb-10"
          />
          <div className="flex flex-col gap-5 md:flex-row">
            <article className="bg-gray-400 p-4 text-center">
              <FaScrewdriverWrench
                className="mx-auto pb-4 text-3xl text-primary"
                size={50}
              />
              <h4 className="pb-4 font-semibold">Przystępna cena</h4>
              <p>
                Oferujemy konkurencyjne ceny bez ukrytych kosztów. Transparentne
                wyceny i uczciwe podejście do klienta.
              </p>
            </article>
            <article className="bg-gray-400 p-4 text-center">
              <FaScrewdriverWrench
                className="mx-auto pb-4 text-3xl text-primary"
                size={50}
              />
              <h4 className="pb-4 font-semibold">Fachowy hydraulik</h4>
              <p>
                Doświadczeni specjaliści z wieloletnim stażem. Gwarancja jakości
                wykonania i profesjonalne podejście do każdego zlecenia.
              </p>
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
