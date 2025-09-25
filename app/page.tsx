'use client';

import HeroBanner from '@/components/HeroBanner/HeroBanner';
import OurServices from '@/components/OurServices/OurServices';
import ChooseOurServices from '@/components/ChooseOurServices/ChooseOurServices';
import WhereAreWe from '@/components/WhereAreWe';
import Faq from '@/components/Faq/Faq';
import Analytics from '@/components/Analytics/Analytics';
import { Analytics as VercelAnalytics } from '@vercel/analytics/next';

export default function Home() {
  return (
    <>
      <Analytics />
      <VercelAnalytics />
      <HeroBanner />
      <OurServices />
      <ChooseOurServices />
      <WhereAreWe />
      <Faq />
    </>
  );
}
