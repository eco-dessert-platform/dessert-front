'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import Category from '@/components/commons/footer/assets/category.svg';
import Heart from '@/components/commons/footer/assets/heart.svg';
import Profile from '@/components/commons/footer/assets/profile.svg';
import Search from '@/components/commons/footer/assets/search.svg';
import Home from '@/components/commons/footer/assets/home.svg';
import CategoryActive from '@/components/commons/footer/assets/category-active.svg';
import HeartActive from '@/components/commons/footer/assets/heart-active.svg';
import ProfileActive from '@/components/commons/footer/assets/profile-active.svg';
import SearchActive from '@/components/commons/footer/assets/search-active.svg';
import HomeActive from '@/components/commons/footer/assets/home-active.svg';

const Footer = () => {
  const pathname = usePathname();

  // 나중에 따로 뺄거
  const menu = [
    { title: '홈', defaultIcon: <Home />, activeIcon: <HomeActive />, href: '/' },
    { title: '검색', defaultIcon: <Search />, activeIcon: <SearchActive />, href: '/search' },
    { title: '전체', defaultIcon: <Category />, activeIcon: <CategoryActive />, href: '/products' },
    { title: '찜', defaultIcon: <Heart />, activeIcon: <HeartActive />, href: '/wishlist' },
    {
      title: '마이페이지',
      defaultIcon: <Profile />,
      activeIcon: <ProfileActive />,
      href: '/mypage'
    }
  ];

  return (
    <div className="z-footer sm:w-[600px] sm:left-1/2 sm:translate-x-[-50%] py-[13px] flex justify-between fixed left-0 bottom-0 w-full bg-white border-t border-gray-100">
      {menu.map(item => {
        const isHomePage = pathname === '/';
        const isHomeLink = item.href === '/';

        const isStorePage = pathname === '/stores';
        const isProductLink = item.href === '/products';

        let isActive = pathname.startsWith(item.href);
        if (!isHomePage && isHomeLink) {
          isActive = false;
        }
        if (isStorePage && isProductLink) {
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
