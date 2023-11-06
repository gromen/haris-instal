'use client';

import AccordionListItem from '@/components/AccordionList/AccordionListItem';
import { useState } from 'react';

const accordionItems = [
  {
    itemId: '0',
    title: 'What Kind of work can a handyman do',
    content:
      'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet consectetur deleniti dignissimos dolores eos magni non quam qui, unde voluptates!',
  },
  {
    itemId: '1',
    title: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. 1',
    content:
      'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet consectetur deleniti dignissimos dolores eos magni non quam qui, unde voluptates!',
  },
  {
    itemId: '2',
    title: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. 2',
    content:
      'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet consectetur deleniti dignissimos dolores eos magni non quam qui, unde voluptates!',
  },
  {
    itemId: '3',
    title: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. 3',
    content:
      'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet consectetur deleniti dignissimos dolores eos magni non quam qui, unde voluptates!',
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
