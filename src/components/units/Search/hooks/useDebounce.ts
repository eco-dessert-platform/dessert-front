import { useEffect, useState } from 'react';

export const useDebounce = (inputValue: string, delay: number) => {
    const [debounceInputValue, setDebounceInputValue] = useState(inputValue);
    useEffect(() => {
        const timer = setTimeout(() => {
            inputValue && setDebounceInputValue(inputValue);
        }, delay);

        return () => clearTimeout(timer);
    }, [inputValue, delay]);
    return debounceInputValue;
};
