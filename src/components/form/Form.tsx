'use client';

import { FC, FormEventHandler } from 'react';
import { FormFieldsType } from './types';
import { Field } from './Field';
import { FormContextProvider } from './FormContext';

import './Form.css';
import { Button } from './Button';

type Props = { fields: FormFieldsType; onSubmit: () => Promise<unknown> };

export const Form: FC<Props> = ({ fields, onSubmit }) => {
  const submit: FormEventHandler<HTMLFormElement> = (e) => {
    e.preventDefault();
  };

  return (
    <FormContextProvider initialFields={fields} onSubmit={onSubmit}>
      <form
        className="flex flex-col bg-slate-500 p-3 rounded-md gap-3 shadow-md"
        onSubmit={submit}>
        {fields.map((fieldProps) => (
          <Field key={fieldProps.name} {...fieldProps} />
        ))}
        <Button>Submit</Button>
      </form>
    </FormContextProvider>
  );
};
