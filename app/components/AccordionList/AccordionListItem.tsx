import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown, faChevronUp } from '@fortawesome/free-solid-svg-icons';
import { clsx } from 'clsx';

type AccordionListItemProps = {
  title: string;
  content: string;
  isOpen: boolean;
  onClick: (itemId: string) => void;
  itemId: string;
  accordionItemIndex: string | number;
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
  const tabIndexContent = isOpen ? 0 : undefined;

  return (
    <li className={classesLi} onClick={() => onClick(itemId)}>
      {isOpen ? (
        <FontAwesomeIcon
          icon={faChevronUp}
          className="absolute right-2 top-3 text-primary"
        />
      ) : (
        <FontAwesomeIcon
          icon={faChevronDown}
          className="absolute right-2 top-3 text-primary"
        />
      )}
      <button
        type="button"
        aria-expanded={isOpen}
        className="w-full p-3 text-left font-bold"
        aria-controls={accessibleId}
      >
        {title}
      </button>
      <p
        id={accessibleId}
        className={classesContent}
        tabIndex={tabIndexContent}
      >
        {content}
      </p>
    </li>
  );
}
