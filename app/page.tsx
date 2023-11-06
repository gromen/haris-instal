'use client';
import { config } from '@fortawesome/fontawesome-svg-core';

import HeroBanner from '@/components/HeroBanner/HeroBanner';
import TrustedPartner from '@/components/TrustedPartner/TrustedPartner';
import OurServices from '@/components/OurServices/OurServices';
// import UrgentContact from '@/app/components/UrgentContact/UrgentContact';
import ChooseOurServices from '@/components/ChooseOurServices/ChooseOurServices';
import TotalStatistics from '@/components/TotalStatistics/TotalStatistics';
import Faq from '@/components/Faq/Faq';
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
