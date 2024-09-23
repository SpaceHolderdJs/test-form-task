import {
  createContext,
  PropsWithChildren,
  FC,
  useState,
  useEffect,
  useCallback,
} from 'react';
import { FormContextType, FormFieldsType } from './types';

const initialValues: FormContextType = {
  formData: {},
  errors: {},
};

export const FormContext = createContext(initialValues);

export const FormContextProvider: FC<
  PropsWithChildren & {
    initialFields: FormFieldsType;
    onSubmit: (data: Record<string, string>) => Promise<unknown>;
  }
> = ({ children, initialFields, onSubmit }) => {
  const [formData, setFormData] = useState({});
  const [errors, setErrors] = useState({});

  const initializeFields = (fields: FormFieldsType) => {
    const values = fields.reduce<Record<string, string | number | boolean>>(
      (acc, { name, default_value, value }) => {
        acc[name] = value || default_value || '';
        return acc;
      },
      {}
    );

    setFormData(values);
  };

  const validate = useCallback(
    (fieldName?: string) => {
      if (fieldName) {
        const field = initialFields.find((field) => field.name === fieldName);
        const valueToValidate: string =
          formData[fieldName as keyof typeof formData];

        if (!field?.validation) return;

        const error =
          field?.validation &&
          valueToValidate.toString()?.match(field.validation)?.at(0)
            ? ''
            : `${fieldName} is invalid`;

        const updatedErrors = {
          ...errors,
          [fieldName]: error,
        };

        setErrors(updatedErrors);

        return updatedErrors;
      }

      const updatedErrors = initialFields.reduce<Record<string, string>>(
        (acc, { validation, name }) => {
          const valueToValidate: string =
            formData[name as keyof typeof formData];

          if (!validation) return acc;

          acc[name] = valueToValidate.toString()?.match(validation)?.at(0)
            ? ''
            : `${name} is invalid`;

          return acc;
        },
        {}
      );

      setErrors(updatedErrors);

      return updatedErrors;
    },
    [formData, initialFields, errors]
  );

  const setFieldValue = (name: string, value: string) => {
    setFormData((prev) => {
      const updatedValues = { ...prev, [name]: value };
      validate(name);
      return updatedValues;
    });
  };

  const submit = async () => {
    const errors = validate();
    if (errors && Object.values(errors).some((e) => e)) return;

    onSubmit(formData);
  };

  useEffect(() => {
    initializeFields(initialFields);
  }, [initialFields]);

  return (
    <FormContext.Provider
      value={{
        initializeFields,
        formData,
        errors,
        setFieldValue,
        validate,
        onSubmit: submit,
      }}>
      {children}
    </FormContext.Provider>
  );
};
