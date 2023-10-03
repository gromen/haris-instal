import AccordionList from '@/app/components/AccordionList/AccordionList';
import Heading from '@/app/components/Heading/Heading';

export default function Faq() {
  return (
    <section className="container mx-auto mt-10 px-4 md:mt-20 lg:w-2/3">
      <Heading title="Najczęściej Zadawane Pytania" subtitle="FAQ" />
      <AccordionList />
    </section>
  );
}
