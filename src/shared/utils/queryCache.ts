import { Cursor } from '@/shared/types/response';
import { InfiniteData } from '@tanstack/react-query';

/**
 *
 * @param oldData 변경할 oldData
 * @param target 변경할 타겟 {key: object의 key값, id: key값의 value}
 * @param newItem 새로운 값
 * @returns InfiniteData 형식으로 새로운 데이터 반환
 */
export const updateInfiniteQueryCache = <T>(
  oldData: InfiniteData<Cursor<T[]>> | undefined,
  target: { value: number; key: keyof T },
  updateFn: (oldItem: T) => T
) => {
  if (!oldData) return oldData;

  const newData = { ...oldData };
  newData.pages = newData.pages?.map((page) => {
    const itemIndex = page.content.findIndex((item) => item[target.key] === target.value);
    if (itemIndex === -1) return page;

    const updatedPage = { ...page };
    updatedPage.content = [...page.content];
    const oldItem = updatedPage.content[itemIndex];
    const updatedItem = updateFn(oldItem);
    updatedPage.content[itemIndex] = updatedItem;
    return updatedPage;
  });

  return newData;
};
