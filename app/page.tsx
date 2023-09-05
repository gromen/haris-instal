import { Fragment } from 'react';
import '@fortawesome/fontawesome-svg-core/styles.css';
import { config } from '@fortawesome/fontawesome-svg-core';

import Header from '@/app/components/Header/Header';
import HeroBanner from '@/app/components/HeroBanner/HeroBanner';
import TrustedPartner from '@/app/components/TrustedPartner/TrustedPartner';

export default function Home() {
  config.autoAddCss = false;

  return (
    <Fragment>
      <Header />
      <main>
        <HeroBanner />
        <TrustedPartner />
      </main>
    </Fragment>
  );
}
