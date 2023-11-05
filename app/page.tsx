'use client';
import { config } from '@fortawesome/fontawesome-svg-core';

import HeroBanner from '@/app/components/HeroBanner/HeroBanner';
import TrustedPartner from '@/app/components/TrustedPartner/TrustedPartner';
import OurServices from '@/app/components/OurServices/OurServices';
// import UrgentContact from '@/app/components/UrgentContact/UrgentContact';
import ChooseOurServices from '@/app/components/ChooseOurServices/ChooseOurServices';
import TotalStatistics from '@/app/components/TotalStatistics/TotalStatistics';
import Faq from '@/app/components/Faq/Faq';
// import Projects from '@/app/components/Projects/Projects';

import '@fortawesome/fontawesome-svg-core/styles.css';

export default function Home() {
  config.autoAddCss = false;

  return (
    <>
      <HeroBanner />
      <TrustedPartner />
      <OurServices />
      {/* <UrgentContact /> */}
      <ChooseOurServices />
      <TotalStatistics />
      <Faq />
      {/* <Projects /> */}
    </>
  );
}
