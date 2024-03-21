export interface IFilterType {
  MainTab: string;
  subTab: {
    id: number;
    name: string;
  }[];
}
export interface FilterTypes {
  selectedTags: IFilterType[];
  isModalOpen: boolean;
}

export const navItem: IFilterType[] = [
  {
    MainTab: '카테고리',
    subTab: [
      {
        id: 1,
        name: '전체'
      },
      {
        id: 2,
        name: '빵'
      },
      {
        id: 3,
        name: '쿠키'
      },
      {
        id: 4,
        name: '케이크'
      },
      {
        id: 5,
        name: '타르트'
      },
      {
        id: 6,
        name: '그래놀라/그릭요거트'
      },
      {
        id: 7,
        name: '잼/청'
      },
      {
        id: 8,
        name: '기타'
      }
    ]
  },
  {
    MainTab: '성분',
    subTab: [
      {
        id: 1,
        name: '전체'
      },
      {
        id: 2,
        name: '글루텐프리'
      },
      {
        id: 3,
        name: '고단백'
      },
      {
        id: 4,
        name: '비건'
      },
      {
        id: 5,
        name: '무설탕'
      },
      {
        id: 6,
        name: '키토제닉'
      }
    ]
  }
];
