import { FormEvent } from 'react';

export default function Contact() {
  const onSubmit = (event: FormEvent) => {
    event.preventDefault();
    console.log(event.target);
  };

  return (
    <form onSubmit={onSubmit} className="justify-between gap-2 sm:flex">
      <div className="gap-2 sm:flex">
        <label htmlFor="name" className="inline-block">
          Twoje imię<sup>*</sup>
          <input className="mt-3 block md:inline-block" type="text" id="name" />
        </label>
        <label htmlFor="email" className="mt-2 inline-block sm:mt-0">
          Twój email<sup>*</sup>
          <input
            className="mt-3 block sm:inline-block"
            type="text"
            id="email"
          />
        </label>
        <label htmlFor="phone" className="mt-2 inline-block sm:mt-0">
          Telefon<sup>*</sup>
          <input
            className="mt-3 block sm:inline-block"
            type="text"
            id="phone"
          />
        </label>
      </div>
      <button
        type="submit"
        className="mt-8 bg-primary p-4 text-white transition-colors hover:bg-navy-100 sm:block"
      >
        Wyślij
      </button>
    </form>
  );
}
