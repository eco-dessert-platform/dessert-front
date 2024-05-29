import { Children, ReactNode, isValidElement } from 'react';

interface Props {
  children: ReactNode;
  target: JSX.Element;
}
const getComponentFromChildren = ({ children, target }: Props) => {
  const childrenArray = Children.toArray(children);
  const dropdownItem = childrenArray.filter(
    (child) => isValidElement(child) && child.type === target.type
  );

  return dropdownItem;
};

export default getComponentFromChildren;
