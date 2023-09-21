import { ChangeEvent, FormEvent, useState } from 'react';

const initialState = { name: '', email: '', phone: '' };

export default function Contact() {
  const [values, setValues] = useState(initialState);

  const onSubmit = async (event: FormEvent) => {
    event.preventDefault();
    await fetch('/api/contact', {
      method: 'POST',
      body: JSON.stringify(values),
    });
    console.log(values);
  };

  const onChange = ({ target }: ChangeEvent<HTMLInputElement>) => {
    setValues((prevValues) => ({
      ...prevValues,
      [target.name]: target.value,
    }));
  };

  const disabled = !values.email || !values.phone || !values.name;

  return (
    <form
      onSubmit={onSubmit}
      className="items-center justify-between gap-5 lg:flex"
    >
      <div className="mb-4 lg:mb-0">
        <p className="pb-2 text-lg text-primary">Emergency services</p>
        <p className="text-2xl font-semibold">
          Having an urgent problem and can&apos;t wait?
        </p>
      </div>
      <div className="grow items-center gap-4 lg:flex">
        <label htmlFor="name" className="inline-block w-full lg:w-auto">
          Twoje imię<sup>*</sup>
          <input
            required
            className="mt-3 block h-10 w-full p-3 text-primary md:inline-block"
            type="text"
            id="name"
            name="name"
            value={values.name}
            onChange={onChange}
          />
        </label>
        <label
          htmlFor="email"
          className="mt-2 inline-block w-full lg:mt-0 lg:w-auto"
        >
          Twój email<sup>*</sup>
          <input
            required
            className="mt-3 block h-10 w-full p-3 text-primary lg:inline-block"
            type="email"
            id="email"
            name="email"
            value={values.email}
            onChange={onChange}
          />
        </label>
        <label
          htmlFor="phone"
          className="mt-2 inline-block w-full lg:mt-0 lg:w-auto"
        >
          Telefon<sup>*</sup>
          <input
            required
            className="mt-3 block h-10 w-full p-3 text-primary lg:inline-block"
            type="tel"
            id="phone"
            name="phone"
            value={values.phone}
            onChange={onChange}
          />
        </label>
        <button
          type="submit"
          className="transition-colors mt-8 w-full bg-primary p-4 text-white hover:bg-navy-100 sm:w-auto lg:block"
          disabled={disabled}
        >
          Wyślij
        </button>
      </div>
    </form>
  );
}
