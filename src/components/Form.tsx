import { cn } from '@/utils/cn';
import {  ReactNode } from 'react';
import { FieldValues, SubmitHandler, UseFormReturn } from 'react-hook-form';

type FormProps<T extends FieldValues> = {
  action?: (formData: FormData) => Promise<void> | void | undefined;
  children: ReactNode;
  onSubmit: SubmitHandler<T>;
  methods: UseFormReturn<T>;
  className?: string;
}

const Form = <T extends FieldValues>({ action, children, onSubmit, methods, className }: FormProps<T>) => {
  return <form
    action={action}
    onSubmit={e => {
      e.preventDefault();
      void methods.handleSubmit(onSubmit)(e);
    }}
    className={cn('flex flex-col gap-4', className)}
  >
    {children}
  </form>;
};

export default Form;