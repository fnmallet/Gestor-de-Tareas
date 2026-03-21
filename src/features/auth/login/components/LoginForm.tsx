'use client';
import { loginAction } from '@/features/auth/login/actions';
import { useForm } from 'react-hook-form';
import { loginSchema, LoginSchemaFieldNames, LoginSchemaType } from '@/features/auth/login/schemas/loginSchema';
import Form from '@/components/Form';
import FormField from '@/components/FormField';
import Input from '@/components/Input';
import Heading from '@/components/Heading';
import Button, { buttonClasses } from '@/components/Button';
import HorizontalLine from '@/components/HorizontalLine';
import LinkStyled from '@/components/LinkStyled';
import { routes } from '@/constants/routes';
import { zodResolver } from '@hookform/resolvers/zod';
import { useState, useTransition } from 'react';
import { cn } from '@/utils/cn';

const LoginForm = () => {
  const methods = useForm<LoginSchemaType>({
    resolver: zodResolver(loginSchema)
  });
  const [isPending, startTransition] = useTransition();
  const [error, setError] = useState<string>();
  const onSubmit = async (data: LoginSchemaType) => {
    startTransition(async () => {
      const response = await loginAction(data);

      if(response.error)
        setError(response.error);
    });
  };

  return <Form
    methods={methods}
    onSubmit={onSubmit}
    className='w-xs mx-auto flex flex-col gap-4 border border-gray-100 rounded-2xl box-content p-16 shadow-lg'
  >
    <Heading level={1}>Inicio de sesión</Heading>
    <div>
      <div className='flex flex-col gap-8 items-center mb-4'>
        <FormField inputId={LoginSchemaFieldNames.email} label="Email" error={methods.formState.errors.email?.message}>
          <Input id={LoginSchemaFieldNames.email} type="text" {...methods.register(LoginSchemaFieldNames.email)} />
        </FormField>
        <FormField inputId={LoginSchemaFieldNames.password} label="Contraseña" error={methods.formState.errors.password?.message}>
          <Input id={LoginSchemaFieldNames.password} type="password" {...methods.register(LoginSchemaFieldNames.password)} />
        </FormField>
      </div>
      {error && <span className="text-red-600">{error}</span>}
    </div>
    <Button className={cn(buttonClasses, 'w-full')} type="submit" isLoading={isPending} disabled={isPending}>Iniciar sesión</Button>
    <HorizontalLine />
    <div className='flex flex-col gap-2'>
      <span className='text-center'>¿Olvidaste tu contraseña? <LinkStyled href={routes.auth.passwordRecovery}>Restablecer</LinkStyled></span>
      <span className='text-center'>¿No tienes una cuenta? <LinkStyled href={routes.auth.register}>Registrate</LinkStyled></span>
    </div>
  </Form>;
};

export default LoginForm;

