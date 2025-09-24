'use client';

import AccordionListItem from '@/components/AccordionList/AccordionListItem';
import { useState } from 'react';

const accordionItems = [
  {
    itemId: '0',
    title: 'Jakie usługi hydrauliczne oferujecie?',
    content:
      'Oferujemy kompleksowe usługi hydrauliczne: instalacje wodno-kanalizacyjne, cieplne i klimatyzacyjne, naprawy awaryjne, modernizacje instalacji, montaż urządzeń sanitarnych oraz konserwację systemów grzewczych. Zapewniamy profesjonalne wykonanie zgodnie z najwyższymi standardami.',
  },
  {
    itemId: '1',
    title: 'Czy wykonujecie roboty budowlane?',
    content:
      'Tak, wykonujemy roboty budowlane związane ze wznoszeniem budynków mieszkalnych i niemieszkalnych, przygotowanie terenu pod budowę, tynkowanie, wykończenia wnętrz, posadzkarstwo, tapetowanie, malowanie i szklenie. Nasz zespół ma wieloletnie doświadczenie w branży budowlanej.',
  },
  {
    itemId: '2',
    title: 'Jak długo trwa realizacja zlecenia?',
    content:
      'Czas realizacji zależy od zakresu prac. Proste naprawy hydrauliczne wykonujemy w ciągu 1-2 dni, większe instalacje mogą trwać 3-7 dni, a kompleksowe roboty budowlane od 2 tygodni do kilku miesięcy. Zawsze informujemy o przewidywanym czasie realizacji przed rozpoczęciem prac.',
  },
  {
    itemId: '3',
    title: 'Czy udzielacie gwarancji na wykonane prace?',
    content:
      'Tak, udzielamy gwarancji na wszystkie wykonane prace. Na roboty hydrauliczne gwarancja wynosi 2 lata, na roboty budowlane 5 lat. Wszystkie materiały używane przez nas posiadają gwarancję producenta. Szczegóły gwarancji są zawsze zawarte w umowie.',
  },
];

export default function AccordionList() {
  const [openItemId, setOpenItemId] = useState('');

  const onItemClick = (itemId: string) => {
    setOpenItemId((previItemId) => {
      return previItemId === itemId ? '' : itemId;
    });
  };

  return (
    <ul>
      {accordionItems?.map((item, index) => (
        <AccordionListItem
          isOpen={item.itemId === openItemId}
          title={item.title}
          content={item.content}
          itemId={item.itemId}
          key={item.itemId}
          onClick={onItemClick}
          accordionItemIndex={index}
        />
      ))}
    </ul>
  );
}
