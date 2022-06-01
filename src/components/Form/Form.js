import React from 'react';

import Input from '../Input/Input';

import { LABELS, ERRORS } from '../../constants/constants';

import { getMaxDate } from '../../utils/getMaxDate';

import styles from './Form.module.css';

const maxDate = getMaxDate();
const minDate = '2010-01-01';

const Form = ({
  isCheck,
  handleClick,
  fio,
  fioValid,
  tel,
  telValid,
  email,
  emailValid,
  date,
  dateValid
}) => {
  return (
    <form className={ styles.form }>
      <Input
        type="text"
        id="fio"
        value={ fio.value }
        handleChangeValue={ fio.onChange }
        maxLength="50"
        autoFocus
        isCheck={ isCheck }
        isValueValid={ fioValid.isValid }
        label={LABELS.FIO}
        htmlFor="fio"
        error={ERRORS.FIO}
      />
      <Input
        type="tel"
        id="tel"
        value={ tel.value }
        handleChangeValue={ tel.onChange }
        isCheck={ isCheck }
        isValueValid={ telValid.isValid }
        label={LABELS.TEL}
        htmlFor="tel"
        error={ERRORS.TEL}
      />
      <Input
        type="email"
        id="email"
        value={ email.value }
        handleChangeValue={ email.onChange }
        maxLength="30"
        isCheck={ isCheck }
        isValueValid={ emailValid.isValid }
        label={LABELS.EMAIL}
        htmlFor="email"
        error={ERRORS.EMAIL}
      />
      <Input
        type="date"
        minDate={ minDate }
        maxDate={ maxDate }
        id="date"
        value={ date.value }
        handleChangeValue={ date.onChange }
        isCheck={ isCheck }
        isValueValid={ dateValid.isValid }
        label={LABELS.DATE}
        htmlFor="date"
        error={ERRORS.DATE}
      />
      <button
        className={ styles.button }
        type="button"
        onClick={ handleClick }
      >
        Продолжить
      </button>
    </form>
  );
}

export default Form;