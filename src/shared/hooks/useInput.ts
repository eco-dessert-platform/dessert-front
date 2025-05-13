import { useState, ChangeEvent } from 'react';

/**
 * @deprecated react-hook-form 사용해주세요
 * */
const useInput = (initialValue: string) => {
  const [value, setValue] = useState<string>(initialValue);

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
  };

  return {
    value,
    onChange: handleChange,
    reset: () => setValue(initialValue)
  };
};

export default useInput;
