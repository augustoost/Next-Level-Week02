import React, { SelectHTMLAttributes } from 'react';

import './styles.css';

interface ISelectOptions {
  value: string;
  label: string;
}

interface SelectProps extends SelectHTMLAttributes<HTMLSelectElement> {
  label: string;
  name: string;
  options: Array<ISelectOptions>;
}

const Select: React.FC<SelectProps> = ({label, name, options, ...rest}) => {
  return (
    <div className="select-block">
      <label htmlFor={name}>{label}</label>
      <select id={name} value="" {...rest}> 
        <option value="" disabled hidden>Selecione uma opção</option>

        {options.map(option => {
          return <option key={option.value} value={option.value}>{option.label}</option>;
        })}
      </select>
    </div>
  );
}

export default Select;