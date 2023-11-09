import { clsx } from 'clsx';
import { motion } from 'framer-motion';
import { FaChevronDown, FaChevronUp } from 'react-icons/fa6';

type AccordionListItemProps = {
  title: string;
  content: string;
  isOpen: boolean;
  onClick: (itemId: string) => void;
  itemId: string;
  accordionItemIndex: string | number;
  classesLi?: string;
};

export default function AccordionListItem({
  title,
  content,
  onClick,
  itemId,
  isOpen,
  accordionItemIndex,
}: AccordionListItemProps) {
  const classesLi = clsx([
    { 'border-b border-t border-primary': isOpen },
    'relative mb-5 bg-gray-400',
  ]);
  const classesContent = clsx([
    'border-t text-sm transition-height transition-opacity transition-spacing pl-3',
    { 'opacity-100 h-full py-2 border-t-gray-500': isOpen },
    { 'opacity-0 h-0': !isOpen },
  ]);
  const accessibleId = `accordionItem-${accordionItemIndex}`;
  const attributesContent = {
    tabIndex: isOpen ? 0 : undefined,
  };
  const arrowIcon = isOpen ? (
    <FaChevronUp className="absolute right-2 top-1/3 text-primary" />
  ) : (
    <FaChevronDown className="absolute right-2 top-1/3 text-primary" />
  );

  return (
    <motion.li
      className={classesLi}
      onClick={() => onClick(itemId)}
      initial={{ left: 100, opacity: 0 }}
      animate={{ left: 0, opacity: 1 }}
      transition={{ delay: 0.1 * Number(accordionItemIndex), duration: 0.4 }}
    >
      <button
        type="button"
        aria-expanded={isOpen}
        className="relative w-full p-3 text-left font-bold"
        aria-controls={accessibleId}
      >
        {arrowIcon}
        {Number(accordionItemIndex) + 1}. {title}
      </button>
      <p id={accessibleId} className={classesContent} {...attributesContent}>
        {content}
      </p>
    </motion.li>
  );
}
