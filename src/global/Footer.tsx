'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

import {
  CategoryIcon,
  CategoryRedIcon,
  HeartIcon,
  HomeIcon,
  HomeRedIcon,
  ProfileIcon,
  ProfileRedIcon,
  SearchIcon
} from '@/shared/components/icons';
import PATH from '@/shared/constants/path';

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
      defaultIcon: <SearchIcon shape="gray-24" />,
      activeIcon: <SearchIcon shape="red-24" />,
      href: PATH.search
    },
    {
      title: '카테고리',
      defaultIcon: <CategoryIcon />,
      activeIcon: <CategoryRedIcon />,
      href: PATH.mainCategory
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
    <div className="z-footer sticky bottom-0 flex h-[70px] w-full items-center justify-between border-t border-gray-100 bg-white">
      {menu.map((item) => {
        const isHomePage = pathname === '/';
        const isHomeLink = item.href === '/';

        const isMainPage = pathname.startsWith('/main');
        const isMainCategoryLink = item.href === PATH.mainCategory;

        const isWishStorePage = pathname === PATH.wishStoreList;
        const isWishProductLink = item.href === PATH.wishProductList;

        let isActive = pathname.startsWith(item.href);
        if (!isHomePage && isHomeLink) {
          isActive = false;
        }
        if (isMainPage && isMainCategoryLink) {
          isActive = true;
        }
        if (isWishStorePage && isWishProductLink) {
          isActive = true;
        }

        return (
          <Link
            key={item.title}
            href={item.href}
            className="flex w-1/5 cursor-pointer flex-col items-center justify-center gap-[2px]"
          >
            {isActive ? item.activeIcon : item.defaultIcon}
            <span
              className={`${isActive ? 'text-primary-orange-red typo-body-12-semibold' : 'typo-body-12-regular text-gray-500'}`}
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
