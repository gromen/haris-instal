import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faArrowLeft,
  faArrowRight,
  faChevronLeft,
  faChevronRight,
} from '@fortawesome/free-solid-svg-icons';

export type ArrowProps = {
  onClick?: () => void;
};

export function NextArrow({ onClick }: ArrowProps) {
  return (
    <button
      className="absolute left-40 top-32 border-2 border-primary p-4 hover:border-navy-800 "
      type="button"
      onClick={onClick}
    >
      <FontAwesomeIcon
        icon={faChevronRight}
        className="text-primary hover:text-navy-800"
        size="lg"
      />
    </button>
  );
}

export function PrevArrow({ onClick }: ArrowProps) {
  return (
    <button
      className="absolute left-40 top-52 z-10 border-2 border-primary p-4 hover:border-navy-800 "
      type="button"
      onClick={onClick}
    >
      <FontAwesomeIcon
        icon={faChevronLeft}
        className="text-primary hover:text-navy-800"
        size="lg"
      />
    </button>
  );
}

export function NextArrowProjects({ onClick }: ArrowProps) {
  return (
    <button
      className="invisible absolute -top-20 right-0 border-2 border-primary p-4 hover:border-navy-800 md:visible"
      type="button"
      onClick={onClick}
    >
      <FontAwesomeIcon
        icon={faArrowRight}
        className="text-primary hover:text-navy-800"
        size="lg"
      />
    </button>
  );
}

export function PrevArrowProjects({ onClick }: ArrowProps) {
  return (
    <button
      className="invisible absolute -top-20 right-16 z-10 border-2 border-primary p-4 hover:border-navy-800 md:visible "
      type="button"
      onClick={onClick}
    >
      <FontAwesomeIcon
        icon={faArrowLeft}
        className="text-primary hover:text-navy-800"
        size="lg"
      />
    </button>
  );
}
