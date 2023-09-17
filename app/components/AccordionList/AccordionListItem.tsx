import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown, faChevronUp } from '@fortawesome/free-solid-svg-icons';

type AccordionListItemProps = {
  title: string;
  content: string;
  isOpen: boolean;
  onClick: (itemId: string) => void;
  itemId: string;
};

export default function AccordionListItem({
  title,
  content,
  onClick,
  itemId,
  isOpen,
}: AccordionListItemProps) {
  return (
    <li
      className={`relative mb-5 bg-gray-400 p-3 transition ${
        isOpen ? 'border-b border-t border-primary' : ''
      }`}
      onClick={() => onClick(itemId)}
    >
      {isOpen ? (
        <FontAwesomeIcon
          icon={faChevronUp}
          className="absolute right-2 text-primary"
        />
      ) : (
        <FontAwesomeIcon
          icon={faChevronDown}
          className="absolute right-2 text-primary"
        />
      )}
      <h6 className="font-bold">{title}</h6>
      {isOpen && (
        <p className="mt-2 border-t border-t-gray-500 pt-2 text-sm">
          {content}
        </p>
      )}
    </li>
  );
}
