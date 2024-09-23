import { FC, ReactNode, useContext } from 'react';
import { FormFieldProps, FormFieldType } from './types';
import { FormContext } from './FormContext';

export const Field: FC<FormFieldProps & { error?: '' }> = ({
  type = 'text',
  default_value,
  max_value,
  min_value,
  options,
  name,
}) => {
  const { formData, setFieldValue, errors } = useContext(FormContext);

  const onChange = (value: string) =>
    setFieldValue && setFieldValue(name, value);
  const value = formData[name as keyof typeof formData] || '';

  const fieldsByTypes: Record<FormFieldType, ReactNode> = {
    text: (
      <input
        className="w-full p-2 rounded-md"
        type="text"
        defaultValue={default_value as string}
        value={value}
        name={name}
        placeholder={name}
        onChange={(e) => onChange(e.target.value)}
      />
    ),
    longtext: (
      <textarea
        className="w-full p-2 rounded-md"
        defaultValue={default_value as string}
        value={value}
        name={name}
        placeholder={name}
        onChange={(e) => onChange(e.target.value)}
      />
    ),
    dropdown: (
      <select
        className="w-full p-2 rounded-md"
        name={name}
        value={value}
        defaultValue={default_value as string}
        onChange={(e) => onChange(e.target.value)}>
        {options?.map((option) => (
          <option key={option}>{option}</option>
        ))}
      </select>
    ),
    number: (
      <input
        className="w-full p-2 rounded-md"
        type="number"
        defaultValue={default_value as number}
        value={value}
        max={max_value || Infinity}
        min={min_value || 0}
        name={name}
        placeholder={name}
        onChange={(e) => onChange(e.target.value)}
      />
    ),
  };

  return (
    <div className="flex flex-col w-96">
      {fieldsByTypes[type]}
      <span className="text-red-700">
        {errors[name as keyof typeof errors]}
      </span>
    </div>
  );
};
