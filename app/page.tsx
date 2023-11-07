'use client';
import { config } from '@fortawesome/fontawesome-svg-core';

import HeroBanner from '@/components/HeroBanner/HeroBanner';
import TrustedPartner from '@/components/TrustedPartner/TrustedPartner';
import OurServices from '@/components/OurServices/OurServices';
import ChooseOurServices from '@/components/ChooseOurServices/ChooseOurServices';
import TotalStatistics from '@/components/TotalStatistics/TotalStatistics';
import Faq from '@/components/Faq/Faq';
import ContactUs from '@/components/ContactUs/ContactUs';

import '@fortawesome/fontawesome-svg-core/styles.css';
import WhereAreWe from '@/components/WhereAreWe';

export default function Home() {
  config.autoAddCss = false;

  return (
    <>
      <HeroBanner />
      <TrustedPartner />
      <OurServices />
      <ChooseOurServices />
      <TotalStatistics />
      <ContactUs />
      <WhereAreWe />
      <Faq />
    </>
  );
}
