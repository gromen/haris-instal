import { FormEvent } from 'react';

export default function Contact() {
  const onSubmit = (event: FormEvent) => {
    event.preventDefault();
    console.log(event.target);
  };

  return (
    <form onSubmit={onSubmit} className="sm:flex gap-2">
      <label htmlFor="name " className="inline-block">
        Twoje imię<sup>*</sup>
        <input className="mt-3 block md:inline-block" type="text" id="name" />
      </label>
      <label htmlFor="email" className="mt-2 sm:mt-0 inline-block">
        Twój email<sup>*</sup>
        <input className="mt-3 block sm:inline-block" type="text" id="email" />
      </label>
      <label htmlFor="phone" className="mt-2 sm:mt-0 inline-block">
        Telefon<sup>*</sup>
        <input className="mt-3 block sm:inline-block" type="text" id="phone" />
      </label>
      <button
        type="submit"
        className="bg-primary text-white hover:bg-navy-100 transition-colors p-4 sm:block w-full mt-8"
      >
        Wyślij
      </button>
    </form>
  );
}
