import React from 'react'
import styles from "./select.module.css";

type SelectOption = {
  label: string;
  value: number;
}

type SelectProps = {
  value?: SelectOption;
  options: SelectOption[];
  onChange: (value: SelectOption | undefined) => void;
}

export default function Select({value, options, onChange}: SelectProps) {
  return (
    <div tabIndex={0} className={styles.container}>
      <span className={styles.value}>Value</span>
      <button className={styles['close-btn']}>
        &times;
      </button>
      <div className={styles.divider}></div>
      <div className={styles.caret}></div>
      <ul className={styles.options}>
        {
          options.map(option => (
            <li key={option.value} className={styles.option}>
              {option.label}
            </li>
          ))
        }
      </ul>
    </div>
  )
}
