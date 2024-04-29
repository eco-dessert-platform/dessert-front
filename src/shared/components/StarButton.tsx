import { ButtonHTMLAttributes } from 'react';
import { StarIcon } from './icons';

interface Props extends ButtonHTMLAttributes<HTMLButtonElement> {
  isAcive: boolean;
}

const StarButton = ({ isAcive, onClick, ...rest }: Props) => (
  <button type="button" onClick={onClick} {...rest}>
    <StarIcon shape={isAcive ? 'on' : 'off'} />
  </button>
);

export default StarButton;
