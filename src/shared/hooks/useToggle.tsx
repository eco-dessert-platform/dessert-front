import { useState } from 'react';

const useToggle = (initialState: boolean = false) => {
  const [isActive, setIsActive] = useState(initialState);

  const toggle = () => {
    setIsActive((prev) => !prev);
  };

  return { toggle, isActive, setIsActive };
};

export default useToggle;
