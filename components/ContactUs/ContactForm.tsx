import { ChangeEvent, FormEvent, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSpinner } from '@fortawesome/free-solid-svg-icons';
import { eventBus } from '@/app/utils/eventBus';

const initialState = { name: '', email: '', phone: '' };

export default function ContactForm() {
  const [values, setValues] = useState(initialState);
  const [loading, setLoading] = useState(false);

  const onSubmit = async (event: FormEvent) => {
    event.preventDefault();
    setLoading(true);
    const response = await fetch('/api/contact', {
      method: 'POST',
      body: JSON.stringify(values),
    });
    const message = await response.text();
    const variant = response.ok ? 'success' : 'error';
    eventBus.emit('submit', { variant, message });
    setLoading(false);
  };

  const onChange = ({ target }: ChangeEvent<HTMLInputElement>) => {
    setValues((prevValues) => ({
      ...prevValues,
      [target.name]: target.value,
    }));
  };

  const disabled = !values.email || !values.phone || !values.name;

  return (
    <>
      <form
        onSubmit={onSubmit}
        className="items-center justify-between gap-5 lg:flex"
      >
        <div className="mb-4 lg:mb-0">
          <p className="pb-2 text-lg text-primary">Sytuacje awaryjne</p>
          <p className="text-2xl font-semibold">
            Masz jakiś problem i nie możesz czekać ?
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
            className="transition-colors mt-8 flex w-full items-center gap-2 bg-primary p-4 text-white hover:bg-navy-100 sm:w-auto"
            disabled={disabled}
          >
            {loading && (
              <FontAwesomeIcon icon={faSpinner} className="animate-spin" />
            )}
            {!loading ? 'Wyślij' : 'Wysyłanie'}
          </button>
        </div>
      </form>
    </>
  );
}
