/**
 * @deprecated
 */
export interface IProductDetailType {
  store: {
    storeName: string;
    storeId: number;
    profile: string;
    isWished: boolean;
  };
  board: {
    boardId: number;
    thumbnail: string;
    images: [
      {
        id: number;
        url: string;
      }
    ];
    title: string;
    price: number;
    orderAvailableDays: {
      mon: boolean;
      tue: boolean;
      wed: boolean;
      thu: boolean;
      fri: boolean;
      sat: boolean;
      sun: boolean;
      [key: string]: boolean;
    };
    purchaseUrl: string;
    isWished: boolean;
    isBundled: boolean;
    detail: IDetailImageType[];
    products: IProductType[];
  };
}

export interface IProductType {
  id: number;
  title: string;
  category: string;
  tags: string[];
}

export interface IDetailImageType {
  id: number;
  imgIndex: number;
  url: string;
}
