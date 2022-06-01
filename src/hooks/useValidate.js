import { useState } from 'react';

import { REG_EXP_FIO, REG_EXP_EMAIL } from '../constants/constants';

import { getMaxDate } from '../utils/getMaxDate';
import { getValueUppercase } from '../utils/getValueUppercase';

const maxDate = getMaxDate();
const minDate = '2010-01-01';

export const useValidate = (initialValue) => {
  const [isValid, setIsValid] = useState(initialValue);

  const validate = ({value}) => {
    const valueFioUppercase = getValueUppercase(value);
    const fioValid = valueFioUppercase.match(REG_EXP_FIO);

    const firstDigitOfOperatorCode = value[3];
    const telValid = firstDigitOfOperatorCode && firstDigitOfOperatorCode !== '1' && firstDigitOfOperatorCode !== '2' && firstDigitOfOperatorCode !== '7' && value.length === 17;

    const emailValid = value.match(REG_EXP_EMAIL);

    const receivedStr = Date.parse(value);
    const maxStr = Date.parse(maxDate);
    const minStr = Date.parse(minDate);
    const dateValid = receivedStr >= minStr && receivedStr <= maxStr;

    if (fioValid || telValid || emailValid || dateValid) {
      setIsValid(true);
    } else {
      setIsValid(false);
    }
  };

  return {
    isValid,
    validate
  }
};