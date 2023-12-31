import {
  FaArrowLeft,
  FaArrowRight,
  FaChevronLeft,
  FaChevronRight,
} from 'react-icons/fa6';

export type ArrowProps = {
  onClick?: () => void;
};

export function NextArrow({ onClick }: ArrowProps) {
  return (
    <button
      className="absolute bottom-10 right-1/3 border-2 border-primary p-4 hover:border-navy-800 "
      type="button"
      onClick={onClick}
    >
      <FaChevronRight className="text-primary hover:text-navy-800" />
    </button>
  );
}

export function PrevArrow({ onClick }: ArrowProps) {
  return (
    <button
      className="absolute bottom-10 left-1/3 z-10 border-2 border-primary p-4 hover:border-navy-800 "
      type="button"
      onClick={onClick}
    >
      <FaChevronLeft className="text-primary hover:text-navy-800" />
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
      <FaArrowRight className="text-primary hover:text-navy-800" />
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
      <FaArrowLeft className="text-primary hover:text-navy-800" />
    </button>
  );
}
