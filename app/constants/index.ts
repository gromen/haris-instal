import { FaBath, FaScrewdriverWrench, FaWrench } from 'react-icons/fa6';

export const services = [
  {
    title: 'Basement plumbing',
    body: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aut illo ipsum magnam maiores, pariatur repellendus ullam. Accusamus blanditiis dolor fugiat illo iusto laboriosam nam provident quas quisquam, sapiente suscipit voluptatum.',
    icon: FaBath,
  },
  {
    title: 'Drain plumbing',
    body: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aut illo ipsum magnam maiores, pariatur repellendus ullam. Accusamus blanditiis dolor fugiat illo iusto laboriosam nam provident quas quisquam, sapiente suscipit voluptatum.',
    icon: FaScrewdriverWrench,
  },
  {
    title: 'Water Line repair',
    body: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aut illo ipsum magnam maiores, pariatur repellendus ullam. Accusamus blanditiis dolor fugiat illo iusto laboriosam nam provident quas quisquam, sapiente suscipit voluptatum.',
    icon: FaWrench,
  },
];

export const navigationItems = [
  { title: 'Home', href: '/', label: 'Home page', classes: 'md:pr-6' },
  { title: 'Usługi', href: '#services', label: 'Usługi', classes: '' },
  // { title: 'Dlaczego my', href: '#why-us', label: 'Dlaczego my', classes: '' },
  { title: 'Kontakt', href: '#contact', label: 'Kontakt', classes: '' },
  {
    title: 'Gdzie jesteśmy',
    href: '#localization',
    label: 'Gdzie jesteśmy',
    classes: '',
  },
  { title: 'FAQ', href: '#faq', label: 'Faq', classes: '' },
] as const;

export const slides = [
  {
    id: 'slide-1',
    url: '/images/logo-trusted-partner-1.svg',
    alt: 'logo trusted partner',
  },
  {
    id: 'slide-2',
    url: '/images/logo-trusted-partner-1.svg',
    alt: 'logo trusted partner',
  },
  {
    id: 'slide-3',
    url: '/images/logo-trusted-partner-1.svg',
    alt: 'logo trusted partner',
  },
  {
    id: 'slide-4',
    url: '/images/logo-trusted-partner-1.svg',
    alt: 'logo trusted partner',
  },
];

export const slidesProjects = [
  {
    id: 1,
    url: '/projects/project-1',
    title: 'project1',
    imageUrl: '/public/images/image1.jpg',
  },
  {
    id: 2,
    url: '/projects/project-2',
    title: 'project2',
    imageUrl: '/public/images/image1.jpg',
  },
  {
    id: 3,
    url: '/projects/project-3',
    title: 'project3',
    imageUrl: '/public/images/image1.jpg',
  },
  {
    id: 4,
    url: '/projects/project-4',
    title: 'project4',
    imageUrl: '/public/images/image1.jpg',
  },
];

export const slidesBanner = [
  {
    url: '/images/slide-1.webp',
    heading: 'We provide Effective Plumbing Solution',
    subheading:
      'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam\n' +
      'consectetur debitis deleniti dolores error est facere fuga incidunt,\n' +
      'laboriosam magnam necessitatibus, officia optio perferendis quia\n' +
      'quisquam reiciendis reprehenderit similique voluptas.',
  },

  {
    url: '/images/slide-2.webp',
    heading: 'We provide Effective Plumbing Solution 2',
    subheading:
      'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam\n' +
      'consectetur debitis deleniti dolores error est facere fuga incidunt,\n' +
      'laboriosam magnam necessitatibus, officia optio perferendis quia\n' +
      'quisquam reiciendis reprehenderit similique voluptas.',
  },
  {
    url: '/images/slide-3.webp',
    heading: 'We provide Effective Plumbing Solution 3',
    subheading:
      'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam\n' +
      'consectetur debitis deleniti dolores error est facere fuga incidunt,\n' +
      'laboriosam magnam necessitatibus, officia optio perferendis quia\n' +
      'quisquam reiciendis reprehenderit similique voluptas.',
  },
  {
    url: '/images/slide-4.webp',
    heading: 'We provide Effective Plumbing Solution 4',
    subheading:
      'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam\n' +
      'consectetur debitis deleniti dolores error est facere fuga incidunt,\n' +
      'laboriosam magnam necessitatibus, officia optio perferendis quia\n' +
      'quisquam reiciendis reprehenderit similique voluptas.',
  },
  {
    url: '/images/slide-1.jpg',
    heading: 'We provide Effective Plumbing Solution 5',
    subheading:
      'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam\n' +
      'consectetur debitis deleniti dolores error est facere fuga incidunt,\n' +
      'laboriosam magnam necessitatibus, officia optio perferendis quia\n' +
      'quisquam reiciendis reprehenderit similique voluptas.',
  },
];
