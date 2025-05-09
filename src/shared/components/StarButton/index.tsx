import { ButtonHTMLAttributes } from 'react';
import { StarIcon } from '../icons';

interface Props extends ButtonHTMLAttributes<HTMLButtonElement> {
  isActive: boolean;
}

const StarButton = ({ isActive, onClick, ...rest }: Props) => (
  <button type="button" onClick={onClick} {...rest}>
    <StarIcon color={isActive ? 'yellow' : 'gray'} size="lg" />
  </button>
);

export default StarButton;
