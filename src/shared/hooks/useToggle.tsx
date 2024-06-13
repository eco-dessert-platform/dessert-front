import { useState } from 'react';

const useToggle = () => {
  const [isActive, setIsActive] = useState(false);

  const toggle = () => {
    setIsActive((prev) => !prev);
  };

  return { toggle, isActive };
};

export default useToggle;
