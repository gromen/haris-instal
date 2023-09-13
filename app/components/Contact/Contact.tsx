import { ChangeEvent, FormEvent, useState } from 'react';

const initialState = { name: '', email: '', phone: '' };

export default function Contact() {
  const [values, setValues] = useState(initialState);

  const onSubmit = (event: FormEvent) => {
    event.preventDefault();
    console.log(values);
  };

  const onChange = ({ target }: ChangeEvent<HTMLInputElement>) => {
    setValues((prevValues) => ({
      ...prevValues,
      [target.name]: target.value,
    }));
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
      <div className="grow items-center gap-4 sm:flex">
        <label htmlFor="name" className="inline-block w-full sm:w-auto">
          Twoje imię<sup>*</sup>
          <input
            required
            className="mt-3 block h-10 w-full text-primary md:inline-block"
            type="text"
            id="name"
            name="name"
            value={values.name}
            onChange={onChange}
          />
        </label>
        <label
          htmlFor="email"
          className="mt-2 inline-block w-full sm:mt-0 sm:w-auto"
        >
          Twój email<sup>*</sup>
          <input
            required
            className="mt-3 block h-10 w-full text-primary sm:inline-block"
            type="email"
            id="email"
            name="email"
            value={values.email}
            onChange={onChange}
          />
        </label>
        <label
          htmlFor="phone"
          className="mt-2 inline-block w-full sm:mt-0 sm:w-auto"
        >
          Telefon<sup>*</sup>
          <input
            required
            className="mt-3 block h-10 w-full text-primary sm:inline-block"
            type="tel"
            id="phone"
            name="phone"
            value={values.phone}
            onChange={onChange}
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
