import RadioOffIcon from '@public/assets/icons/icon-radio-off.svg';
import RadioOnIcon from '@public/assets/icons/icon-radio-on.svg';
import CheckBoxOffIcon from '@public/assets/icons/icn-check-off.svg';
import CheckBoxOnIcon from '@public/assets/icons/icn-check-on.svg';

interface Props {
  shape: 'radio-off' | 'radio-on' | 'checkbox-off' | 'checkbox-on';
}

const CheckIcon = ({ shape }: Props) => {
  switch (shape) {
    case 'radio-off':
      return <RadioOffIcon />;

    case 'radio-on':
      return <RadioOnIcon />;

    case 'checkbox-off':
      return <CheckBoxOffIcon />;

    case 'checkbox-on':
      return <CheckBoxOnIcon />;
    default:
      return null;
  }
};

export default CheckIcon;
