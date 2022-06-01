import React from 'react';

import styles from './Input.module.css';

const Input = ({
  type,
  id,
  value,
  handleChangeValue,
  maxLength,
  autoFocus,
  minDate,
  maxDate,
  label,
  htmlFor,
  isCheck,
  isValueValid,
  error
}) => {
  return (
    <div className={ styles.wrapper }>
      <input
        className={
          `${ styles.input }
           ${ value !== '' ? styles.active : '' }
           ${ id === 'fio' ? styles.fio : '' }`
        }
        type={ type }
        id={ id }
        value={ value }
        onChange={ handleChangeValue }
        required
        maxLength={ maxLength }
        autoFocus={ autoFocus }
        min={ minDate }
        max={ maxDate }
      />
      <label className={ styles.label } htmlFor={ htmlFor }>
        { label }
      </label>
      <div className={ styles.prompt } />
      {
        isCheck && !isValueValid &&
        <span className={ styles.error}>
          { error }
        </span>
      }
    </div>
  );
}

export default Input;