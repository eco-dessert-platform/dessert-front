import type { Metadata } from 'next';
import { GenerateMetadataProps } from '@/shared/types/generateMetadata';
import productService from '@/domains/product/queries/service';
import storeService from '@/domains/store/queries/service';

type StaticRoute = 'root' | 'search' | 'product-category' | 'wish' | 'mypage';
type DynamicRoute = 'product-detail' | 'store-detail';

interface StaticMetadataType {
  [route: string]: Metadata;
}

const BBANGLE_LOGO_IMAGE = {
  og: {
    url: '/opengraph-image.png',
    alt: '빵그리의 오븐 로고',
    type: 'image/png'
  },
  twitter: {
    url: '/twitter-image.png',
    alt: '빵그리의 오븐 로고',
    type: 'image/png'
  }
};

const staticMetadata: StaticMetadataType = {
  root: {
    metadataBase: new URL('https://www.bbangle.store'),
    title: {
      template: '%s | 빵그리의 오븐',
      default: '빵그리의 오븐'
    },
    description:
      '빵그리의 오븐은 건강을 소중히 여기는 이들에게 새로운 디저트 경험을 선사하고, 건강과 맛을 모두 충족시킬 수 있는 특별한 공간을 제공합니다.',
    openGraph: {
      title: '빵그리의 오븐',
      description:
        '빵그리의 오븐은 건강을 소중히 여기는 이들에게 새로운 디저트 경험을 선사하고, 건강과 맛을 모두 충족시킬 수 있는 특별한 공간을 제공합니다.',
      images: [BBANGLE_LOGO_IMAGE.og]
    },
    twitter: {
      card: 'summary',
      title: '빵그리의 오븐',
      description:
        '빵그리의 오븐은 건강을 소중히 여기는 이들에게 새로운 디저트 경험을 선사하고, 건강과 맛을 모두 충족시킬 수 있는 특별한 공간을 제공합니다.',
      images: [BBANGLE_LOGO_IMAGE.twitter]
    }
  },
  search: {
    title: '검색',
    description: '빵그리의 오븐 검색 기능으로 원하는 상품을 찾아보실 수 있습니다.',
    openGraph: {
      title: '검색 | 빵그리의 오븐',
      description: '빵그리의 오븐 검색 기능으로 원하는 상품을 찾아보실 수 있습니다.',
      images: [BBANGLE_LOGO_IMAGE.og]
    },
    twitter: {
      card: 'summary',
      title: '검색 | 빵그리의 오븐',
      description: '빵그리의 오븐 검색 기능으로 원하는 상품을 찾아보실 수 있습니다.',
      images: [BBANGLE_LOGO_IMAGE.twitter]
    }
  },
  'product-category': {
    title: '카테고리',
    description:
      '카테고리별로 건강한 디저트를 확인하세요. 식빵.모닝빵, 베이글.도넛, 케이크, 타르트.파이, 쿠키.비스킷.크래커, 과자, 잼.청, 아이스크림, 요거트, 그래놀라, 기타',
    openGraph: {
      title: '카테고리 | 빵그리의 오븐',
      description: '카테고리별로 건강한 디저트를 확인하세요.',
      images: [BBANGLE_LOGO_IMAGE.og]
    },
    twitter: {
      card: 'summary',
      title: '카테고리 | 빵그리의 오븐',
      description: '카테고리별로 건강한 디저트를 확인하세요.',
      images: [BBANGLE_LOGO_IMAGE.twitter]
    }
  },
  wish: {
    title: '위시리스트',
    description: '관심있는 상품이나 스토어를 위시리스트에 담아보세요.',
    openGraph: {
      title: '위시리스트 | 빵그리의 오븐',
      description: '관심있는 상품이나 스토어를 위시리스트에 담아보세요.',
      images: [BBANGLE_LOGO_IMAGE.og]
    },
    twitter: {
      card: 'summary',
      title: '위시리스트 | 빵그리의 오븐',
      description: '관심있는 상품이나 스토어를 위시리스트에 담아보세요.',
      images: [BBANGLE_LOGO_IMAGE.twitter]
    }
  },
  mypage: {
    title: '마이페이지',
    description: '빵그리의 오븐에 로그인 하고 다양한 서비스를 이용해 보세요.',
    openGraph: {
      title: '마이페이지 | 빵그리의 오븐',
      description: '빵그리의 오븐에 로그인 하고 다양한 서비스를 이용해 보세요.',
      images: [BBANGLE_LOGO_IMAGE.og]
    },
    twitter: {
      card: 'summary',
      title: '마이페이지 | 빵그리의 오븐',
      description: '빵그리의 오븐에 로그인 하고 다양한 서비스를 이용해 보세요.',
      images: [BBANGLE_LOGO_IMAGE.twitter]
    }
  }
};

const generateProductDetailMetadata = async ({
  params
}: GenerateMetadataProps): Promise<Metadata> => {
  if (!params?.productId) return {};
  const id = Number(params.productId);
  const product = await productService.getBoardDetail(id);
  const store = await productService.getStoreInfo(id);
  const productOptions = await productService.getProductOption(id);
  return {
    title: `[${store.title}] ${product.title}`,
    description: productOptions.products.map((item) => item.title).join(', '),
    openGraph: {
      title: '빵그리의 오븐',
      description: `[${store.title}] ${product.title}`,
      images: [
        {
          url: product.profile,
          alt: `${product.title} 상품 이미지`
        }
      ]
    },
    twitter: {
      card: 'summary',
      title: '빵그리의 오븐',
      description: `[${store.title}] ${product.title}`,
      images: [
        {
          url: product.profile,
          alt: `${product.title} 상품 이미지`
        }
      ]
    }
  };
};

const generateStoreDetailMetadata = async ({
  params
}: GenerateMetadataProps): Promise<Metadata> => {
  if (!params?.id) return {};
  const storeId = Number(params.id);
  const storeInfo = await storeService.getStoreInfo(storeId);
  const storeBestProducts = await storeService.getStoreBestProducts(storeId);
  return {
    title: storeInfo.storeName,
    description: `${storeInfo.introduce}. ${storeBestProducts.map((product) => product.title).join(', ')}`,
    openGraph: {
      title: '빵그리의 오븐',
      description: `[${storeInfo.storeName}] ${storeInfo.introduce}`,
      images: [
        {
          url: storeInfo.profile,
          alt: `${storeInfo.storeName} 가게 로고`
        }
      ]
    },
    twitter: {
      card: 'summary',
      title: '빵그리의 오븐',
      description: `[${storeInfo.storeName}] ${storeInfo.introduce}`,
      images: [
        {
          url: storeInfo.profile,
          alt: `${storeInfo.storeName} 가게 로고`
        }
      ]
    }
  };
};

export const getStaticMetadata = (route: StaticRoute): Metadata => staticMetadata[route];

export const getDynamicMetadata = (
  route: DynamicRoute,
  dynamicParams: GenerateMetadataProps
): Metadata | Promise<Metadata> | undefined => {
  switch (route) {
    case 'product-detail':
      return generateProductDetailMetadata(dynamicParams);
    case 'store-detail':
      return generateStoreDetailMetadata(dynamicParams);
    default:
      return undefined;
  }
};
