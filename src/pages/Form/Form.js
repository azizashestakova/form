import React, { useState } from 'react';

import { useInput } from '../../hooks/useInput';
import { useValidate } from '../../hooks/useValidate';

import FormFields from '../../components/Form/Form';

import styles from './Form.module.css';

const Form = () => {
  const [isCheck, setIsCheck] = useState(false);

  const fio = useInput("");
  const tel = useInput("");
  const email = useInput("");
  const date = useInput("");

  const fioValid = useValidate(false);
  const telValid = useValidate(false);
  const emailValid = useValidate(false);
  const dateValid = useValidate(false);

  const handleClick = () => {
    setIsCheck(true);

    fioValid.validate(fio);
    telValid.validate(tel);
    emailValid.validate(email);
    dateValid.validate(date);
  };
  
  const isValidFields = fioValid.isValid && telValid.isValid && emailValid.isValid && dateValid.isValid;

  return (
    <main className={ styles.main }>
      <FormFields
        isCheck={isCheck}
        handleClick={handleClick}
        fio={fio}
        tel={tel}
        email={email}
        date={date}
        fioValid={fioValid}
        telValid={telValid}
        emailValid={emailValid}
        dateValid={dateValid}
      />
      {
        isValidFields &&
        <div className={ styles.notification }>Форма заполнена корректно.</div>
      }
    </main>
  );
}

export default Form;
