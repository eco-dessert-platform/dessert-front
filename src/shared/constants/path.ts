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
  withdraw: '/mypage/withdraw',
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
    `/review/${productId}/create/${progress}`,
  reviewUpdate: ({
    productId,
    progress,
    reviewId
  }: {
    productId: number;
    progress: number;
    reviewId: number;
  }) => `/review/${productId}/${reviewId}/update/${progress}`
};

export default PATH;
