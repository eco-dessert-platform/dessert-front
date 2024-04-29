'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import PATH from '@/shared/constants/path';
import {
  CategoryIcon,
  CategoryRedIcon,
  HeartIcon,
  HomeIcon,
  HomeRedIcon,
  ProfileIcon,
  ProfileRedIcon,
  Search24Icon,
  Search24RedIcon
} from '@/shared/components/icons';

const Footer = () => {
  const pathname = usePathname();

  // 나중에 따로 뺄거
  const menu = [
    {
      title: '홈',
      defaultIcon: <HomeIcon />,
      activeIcon: <HomeRedIcon />,
      href: PATH.home
    },
    {
      title: '검색',
      defaultIcon: <Search24Icon />,
      activeIcon: <Search24RedIcon />,
      href: PATH.search
    },
    {
      title: '전체',
      defaultIcon: <CategoryIcon />,
      activeIcon: <CategoryRedIcon />,
      href: PATH.allProductList
    },
    {
      title: '찜',
      defaultIcon: <HeartIcon shape="nav-off" />,
      activeIcon: <HeartIcon shape="nav-on" />,
      href: PATH.wishProductList
    },
    {
      title: '마이페이지',
      defaultIcon: <ProfileIcon />,
      activeIcon: <ProfileRedIcon />,
      href: PATH.mypage
    }
  ];

  return (
    <div className="z-footer sm:w-[600px] sm:left-1/2 sm:translate-x-[-50%] py-[13px] flex justify-between fixed left-0 bottom-0 w-full bg-white border-t border-gray-100">
      {menu.map((item) => {
        const isHomePage = pathname === '/';
        const isHomeLink = item.href === '/';

        const isStorePage = pathname === '/stores';
        const isProductLink = item.href === '/products';
        const isWishStorePage = pathname.startsWith('/wishlist');
        const isWishProductLink = item.href === '/wishlist/list/products';

        let isActive = pathname.startsWith(item.href);
        if (!isHomePage && isHomeLink) {
          isActive = false;
        }
        if (isStorePage && isProductLink) {
          isActive = true;
        }
        if (isWishStorePage && isWishProductLink) {
          isActive = true;
        }

        return (
          <Link
            key={item.title}
            href={item.href}
            className="flex flex-col items-center justify-center gap-[2px] w-1/5 cursor-pointer"
          >
            {isActive ? item.activeIcon : item.defaultIcon}
            <span
              className={`text-12 leading-150 tracking-tight-2 ${isActive ? 'text-primaryOrangeRed font-semibold' : 'text-gray-500 font-normal'}`}
            >
              {item.title}
            </span>
          </Link>
        );
      })}
    </div>
  );
};

export default Footer;
