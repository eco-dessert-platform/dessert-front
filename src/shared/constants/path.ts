const PATH = {
  home: '/',

  search: '/search',

  mainCategory: '/main/product-category',
  mainProductList: '/main/products',
  mainProductListInfo: (productId: number) => `/main/products/${productId}/info`,
  mainProductListReview: (productId: number) => `/main/products/${productId}/review`,

  wish: '/wish',
  wishLogin: '/wish/login',
  wishList: '/wishlist/list',
  wishProductList: '/wish/products',
  wishStoreList: '/wish/stores',

  profileUpdate: '/mypage/update',
  notification: '/mypage/notifications',
  serviceTerm: '/mypage/service-terms',
  privacyPolicy: '/mypage/privacy-policy',
  marketing: '/mypage/marketing',

  login: '/mypage/login',
  mypage: '/mypage',
  myReview: '/mypage/review',

  preferenceCreate: '/mypage/preference/create',
  preferenceUpdate: '/mypage/preference/upate',
  bbangketing: '/mypage/alarm/bbangketing',
  restock: '/mypage/alarm/restock',

  reviewList: (productId: number) => `${PATH.mainProductList}/${productId}/review`,
  reviewCreate: ({ productId, progress }: { productId: number; progress: number }) =>
    `/review/create?productId=${productId}&progress=${progress}`,
  reviewUpdate: ({
    productId,
    progress,
    reviewId
  }: {
    productId: number;
    progress: number;
    reviewId: number;
  }) => `/review/update?productId=${productId}&reviewId=${reviewId}&progress=${progress}`
};

export default PATH;
