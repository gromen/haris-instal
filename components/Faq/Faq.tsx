import AccordionList from '@/components/AccordionList/AccordionList';
import Heading from '@/components/Heading/Heading';

export default function Faq() {
  return (
    <section
      id="faq"
      className="container mx-auto mt-10 scroll-mt-28 px-4 md:mt-20 lg:w-2/3"
    >
      <Heading title="Najczęściej Zadawane Pytania" subtitle="FAQ" />
      <AccordionList />
    </section>
  );
}
