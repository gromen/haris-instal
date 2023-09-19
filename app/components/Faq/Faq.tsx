import AccordionList from '@/app/components/AccordionList/AccordionList';
import Heading from '@/app/components/Heading/Heading';

export default function Faq() {
  return (
    <section className="container mx-auto px-4 lg:w-2/3">
      <Heading title="Frequently Asked Questions" subtitle="FAQ" />
      <AccordionList />
    </section>
  );
}
