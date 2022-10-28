import React, {
  SelectHTMLAttributes,
  DetailedHTMLProps,
  ChangeEvent,
} from 'react';
import s from './SuperSelect.module.css';
import {OptionsType} from "../../HW7";

type DefaultSelectPropsType = DetailedHTMLProps<SelectHTMLAttributes<HTMLSelectElement>,
  HTMLSelectElement>

type SuperSelectPropsType = DefaultSelectPropsType & {
  options?: OptionsType[]
  value?: number
  onChangeOption?: (option: number) => void
}

const SuperSelect: React.FC<SuperSelectPropsType> = ({
                                                       options,
                                                       className,
                                                       onChange,
                                                       onChangeOption,
                                                       value,
                                                       ...restProps
                                                     }) => {
  const mappedOptions: JSX.Element[] = options
    ? options.map((o) => (
      <option
        id={'hw7-option-' + o.id}
        className={s.option}
        key={o.id}
        value={o.id}
      >
        {o.value}
      </option>
    ))
    : []; // map options with key
  const onChangeCallback = (e: ChangeEvent<HTMLSelectElement>) => {
    // делают студенты

    onChangeOption?.(Number(e.currentTarget.value));
  };

  console.log();
  const finalSelectClassName = s.select + (className ? ' ' + className : '');
  return (

    <select
      className={finalSelectClassName}
      onChange={onChangeCallback}
      name={value ? mappedOptions[value - 1].props.children : ''}
      {...restProps}
    >
      {mappedOptions}
    </select>
  );
};

export default SuperSelect;
