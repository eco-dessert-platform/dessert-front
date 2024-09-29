const PATH = {
  home: '/',

  search: '/search',
  searchProductList: '/search/products',

  mainCategory: '/main/product-category',
  mainProductList: '/main/products',
  mainProductListInfo: (productId: number) => `/main/products/${productId}/info`,
  mainProductListReview: (productId: number) => `/main/products/${productId}/review`,
  mainStoreDetail: (storeId: number) => `/main/stores/${storeId}`,

  wish: '/wish',
  wishLogin: '/wish/login',
  wishList: '/wishlist/list',
  wishProductList: '/wish/products',
  wishStoreList: '/wish/stores',

  profileUpdate: '/mypage/update',
  profileRegistration: '/mypage/registration',
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
  reviewDetail: ({ productId, reviewId }: { productId: number; reviewId: number }) =>
    `/review/${productId}/${reviewId}`,
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
  }) => `/review/${productId}/${reviewId}/update/${progress}`,
  reviewPhotos: (productId: number) => `/review/${productId}/photos`
};

export default PATH;
