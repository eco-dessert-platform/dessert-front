const PATH = {
  home: '/',

  search: '/search',

  mainCategory: '/main/product-category',
  mainProductList: '/main/products',

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
  preferenceUpdate: '/mypage/preference/update',
  bbangcketing: '/mypage/alarm/bbangcketing',
  restock: '/mypage/alarm/restock',

  reviewList: (productId: number) => `${PATH.mainProductList}/${productId}/review`,
  reviewCreate: ({ productId, progress }: { productId: number; progress: number }) =>
    `/main/products/${productId}/review/create/${progress}`,
  reviewUpdate: ({
    productId,
    progress,
    reviewId
  }: {
    productId: number;
    progress: number;
    reviewId: number;
  }) => `/main/products/${productId}/review/${reviewId}/update/${progress}`
};

export default PATH;
