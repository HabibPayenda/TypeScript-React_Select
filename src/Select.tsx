import React from 'react'

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
    <div>Select</div>
  )
}
