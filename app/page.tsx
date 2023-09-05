import { Fragment } from 'react';
import '@fortawesome/fontawesome-svg-core/styles.css';
import { config } from '@fortawesome/fontawesome-svg-core';

import Header from '@/app/components/Header/Header';
import HeroBanner from '@/app/components/HeroBanner/HeroBanner';

import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

export default function Home() {
  config.autoAddCss = false;

  return (
    <Fragment>
      <Header />
      <main className={''}>
        <HeroBanner />
      </main>
    </Fragment>
  );
}
