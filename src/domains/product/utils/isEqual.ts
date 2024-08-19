export const isEqual = (arr1: Array<string | number>, arr2: Array<string | number>) =>
  arr1.every((ele) => arr2.includes(ele));
