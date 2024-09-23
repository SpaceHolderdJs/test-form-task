'use client';

import { Form } from '@/components/form/Form';
import fields from '../components/form/fields.json';
import { FormFieldsType } from '@/components/form/types';

export default function Home() {
  return (
    <div className="w-full flex items-center justify-center min-h-screen bg-slate-800">
      <Form fields={fields as FormFieldsType} onSubmit={async () => {}} />
    </div>
  );
}
