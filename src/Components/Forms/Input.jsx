import React from 'react';
import styles from './Input.module.css';

const Input = (props) => {
  return (
    <div className={styles.wrapper}>
      <label className={styles.label} htmlFor={props.name}>
        {props.label}
      </label>
      <input
        id={props.name}
        name={props.name}
        className={styles.input}
        type={props.type}
        value={props.value}
        onChange={props.onChange}
        onBlur={props.onBlur}
      />
      {props.error && <p className={styles.error}>{props.error}</p>}
    </div>
  );
};

export default Input;
