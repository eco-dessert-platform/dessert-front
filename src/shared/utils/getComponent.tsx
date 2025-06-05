import { Children, ReactNode, isValidElement, type JSX } from 'react';

interface Props {
  children: ReactNode;
  target: JSX.Element;
}
const getComponentFromChildren = ({ children, target }: Props) => {
  const childrenArray = Children.toArray(children);
  const targetComponent = childrenArray.filter(
    (child) => isValidElement(child) && child.type === target.type
  );

  return targetComponent;
};

export default getComponentFromChildren;
