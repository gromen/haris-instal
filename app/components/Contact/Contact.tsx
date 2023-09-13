import { FormEvent } from 'react';

export default function Contact() {
  const onSubmit = (event: FormEvent) => {
    event.preventDefault();
    console.log(event.target);
  };

  return (
    <form
      onSubmit={onSubmit}
      className="items-center justify-between gap-5 sm:flex"
    >
      <div className="mb-4 sm:mb-0">
        <p className="pb-2 text-sm text-primary">Emergency services</p>
        <p className="text-2xl font-semibold">
          Having an urgent problem and can&apos;t wait?
        </p>
      </div>
      <div className="grow items-center gap-3 sm:flex">
        <label htmlFor="name" className="inline-block w-full sm:w-auto">
          Twoje imię<sup>*</sup>
          <input
            className="mt-3 block h-10 w-full md:inline-block"
            type="text"
            id="name"
          />
        </label>
        <label
          htmlFor="email"
          className="mt-2 inline-block w-full sm:mt-0 sm:w-auto"
        >
          Twój email<sup>*</sup>
          <input
            className="mt-3 block h-10 w-full sm:inline-block"
            type="text"
            id="email"
          />
        </label>
        <label
          htmlFor="phone"
          className="mt-2 inline-block w-full sm:mt-0 sm:w-auto"
        >
          Telefon<sup>*</sup>
          <input
            className="mt-3 block h-10 w-full sm:inline-block"
            type="text"
            id="phone"
          />
        </label>
        <button
          type="submit"
          className="mt-8 w-full bg-primary p-4 text-white transition-colors hover:bg-navy-100 sm:block sm:w-auto"
        >
          Wyślij
        </button>
      </div>
    </form>
  );
}
