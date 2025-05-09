'use client';

import Search16GrayIcon from '@public/assets/icons/search/search-16.svg';
import Search16RedIcon from '@public/assets/icons/search/search-16-red.svg';
import Search24GrayIcon from '@public/assets/icons/search/search-24.svg';
import Search24RedIcon from '@public/assets/icons/search/search-24-red.svg';

interface Props {
  shape: 'gray-16' | 'red-16' | 'gray-24' | 'red-24';
}

const SearchIcon = ({ shape }: Props) => {
  switch (shape) {
    case 'gray-16':
      return <Search16GrayIcon />;
    case 'red-16':
      return <Search16RedIcon />;
    case 'gray-24':
      return <Search24GrayIcon />;
    case 'red-24':
      return <Search24RedIcon />;
    default:
      return <Search16GrayIcon />;
  }
};

export default SearchIcon;
