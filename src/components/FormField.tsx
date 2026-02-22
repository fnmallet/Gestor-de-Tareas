import { ReactNode } from 'react';

type FormFieldProps = {
  label: string | ReactNode;
  children: React.ReactNode;
  inputId: string;
  error?: string;
};

const FormField = ({ label, children, inputId, error }: FormFieldProps) => {
  return <div className="flex flex-col gap-2 w-full text-sm">
    <label className='font-medium' htmlFor={inputId}>{label}</label>
    <div className="w-full flex flex-col gap-2">
      {children}
      {
        error && <span className="text-red-600">{error}</span>
      }
    </div>
  </div>;
};

export default FormField;