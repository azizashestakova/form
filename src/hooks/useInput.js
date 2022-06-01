import { useState } from 'react';

import { phoneMask } from '../utils/phoneMask';

export const useInput = (initialValue) => {
  const [value, setValue] = useState(initialValue);

  const handleChangeValue = ({target}) => {
    const id = target.id;
    let value = target.value;
    
    if (id === 'tel') {
      setValue(phoneMask(value))
    } else {
      setValue(value)
    }
  };

  return {
    value,
    onChange: handleChangeValue
  };
};