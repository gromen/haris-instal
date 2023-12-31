'use client';

import HeroBanner from '@/components/HeroBanner/HeroBanner';
import TrustedPartner from '@/components/TrustedPartner/TrustedPartner';
import OurServices from '@/components/OurServices/OurServices';
import ChooseOurServices from '@/components/ChooseOurServices/ChooseOurServices';
import TotalStatistics from '@/components/TotalStatistics/TotalStatistics';
import ContactUs from '@/components/ContactUs/ContactUs';
import WhereAreWe from '@/components/WhereAreWe';
import Faq from '@/components/Faq/Faq';
import Analytics from '@/components/Analytics/Analytics';

export default function Home() {
  return (
    <>
      <Analytics />
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
