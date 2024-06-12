import { useState } from 'react';

const useShakeAnimation = (inital = false) => {
  const [isAnimating, setIsAnimating] = useState(inital);

  const shake = () => {
    setIsAnimating((prev) => !prev);
  };

  return { isAnimating, shake };
};

export default useShakeAnimation;
