export type FormFieldType = 'text' | 'longtext' | 'dropdown' | 'number';

export type FormFieldProps = {
  default_value?: string | number | boolean;
  value?: string | number | boolean;
  validation?: string;
  min_value?: number;
  max_value?: number;
  options?: string[] | number[];
  type: FormFieldType;
  name: string;
};

export type FormFieldsType = Array<FormFieldProps>;

export type FormContextType = {
  initializeFields?: (fields: FormFieldsType) => void;
  setFieldValue?: (name: string, value: string) => void;
  validate?: (fieldName: string) => void;
  onSubmit?: () => Promise<unknown>;
  formData: Record<string, string>;
  errors: Record<string, string>;
};
