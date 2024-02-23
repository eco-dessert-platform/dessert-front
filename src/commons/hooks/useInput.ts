import { useState, ChangeEvent } from 'react';

const useInput = (initialValue: string) => {
    const [value, setValue] = useState(initialValue);

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
