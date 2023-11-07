import React from 'react';
import HeadingHero from './Heading/HeadingHero';

export default function WhereAreWe() {
  return (
    <>
      <HeadingHero id="localization">Gdzie jesteśmy</HeadingHero>
      <iframe
        className="mx-auto my-10 max-w-full grayscale"
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d882.5710376251518!2d21.906551031599587!3d52.803553132328354!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x471fab149b955f8f%3A0x624f5eab1545eea4!2sSzkolna%2017%2C%2007-300%20Ostr%C3%B3w%20Mazowiecka!5e0!3m2!1spl!2spl!4v1695820526059!5m2!1spl!2spl"
        width="100%"
        height="600"
        style={{ border: 0 }}
        allowFullScreen
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        title="haris-instal.pl lokalizacja z google maps"
      ></iframe>
    </>
  );
}
