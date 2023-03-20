import React, { useState } from 'react'
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
  const [isOpen, setIsOpen] = useState(false);
  const [highLighted, setHighLighted] = useState(0);

  const isOptionSelected = (option: SelectOption) => {
    return option === value;
  }

  const setHighLightedIndex = (index: number) => {
    setHighLighted(index);
  }

  return (
    <div onClick={() => setIsOpen(pre => !pre)} onBlur={()=> setIsOpen(false)} tabIndex={0} className={styles.container}>
      <span className={styles.value}>
       {value?.label}
      </span>
      <button onClick={(e) => {
        e.stopPropagation();
        onChange(undefined); 
      }} className={styles['close-btn']}>
        &times;
      </button>
      <div className={styles.divider}></div>
      <div className={styles.caret}></div>
      <ul className={`${styles.options} ${isOpen ? styles.show : ''}`}>
        {
          options.map((option, index) => (
            <li 
            onMouseEnter={() => setHighLightedIndex(index)}
            onClick={(e) => {
              e.stopPropagation()
              onChange(option)
              setIsOpen(false)
            }} key={option.value} className={`${styles.option} ${isOptionSelected(option) ? styles.selected : ''} ${index === highLighted ? styles.highLighted : ''}`}>
              {option.label}
            </li>
          ))
        }
      </ul>
    </div>
  )
}
