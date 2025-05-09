'use client';

import AllIcon from '@public/assets/icons/categories/all-icon.svg';
import ViganIcon from '@public/assets/icons/categories/bigen-icon.svg';
import GluIcon from '@public/assets/icons/categories/glu-icon.svg';
import KitoIcon from '@public/assets/icons/categories/kito-icon.svg';
import NoSugarIcon from '@public/assets/icons/categories/noSugar-icon.svg';
import ProteinIcon from '@public/assets/icons/categories/protein-icon.svg';

interface Props {
  shape: 'all' | 'vigan' | 'gluten' | 'kito' | 'nosugar' | 'protein';
}

const IngredientCategoryIcons = ({ shape }: Props) => {
  switch (shape) {
    case 'all':
      return <AllIcon />;
    case 'vigan':
      return <ViganIcon />;
    case 'gluten':
      return <GluIcon />;
    case 'kito':
      return <KitoIcon />;
    case 'nosugar':
      return <NoSugarIcon />;
    case 'protein':
      return <ProteinIcon />;
    default:
      return <AllIcon />;
  }
};

export default IngredientCategoryIcons;
