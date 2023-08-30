import { Fragment } from 'react';
import Header from '@/app/components/Header/Header';
import '@fortawesome/fontawesome-svg-core/styles.css';
import { config } from '@fortawesome/fontawesome-svg-core';

export default function Home() {
  config.autoAddCss = false;

  return (
    <Fragment>
      <Header />
      <main className="flex min-h-screen flex-col items-center justify-between p-24"></main>
    </Fragment>
  );
}
