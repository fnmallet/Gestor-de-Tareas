'use client';
import { loginAction } from '@/features/auth/login/actions';
import { useForm } from 'react-hook-form';
import { loginSchema, LoginSchemaFieldNames, LoginSchemaType } from '@/features/auth/login/schemas/loginSchema';
import Form from '@/components/Form';
import FormField from '@/components/FormField';
import Input from '@/components/Input';
import Heading from '@/components/Heading';
import Button from '@/components/Button';
import HorizontalLine from '@/components/HorizontalLine';
import LinkStyled from '@/components/LinkStyled';
import { routes } from '@/constants/routes';
import { zodResolver } from '@hookform/resolvers/zod';

const LoginForm = () => {
  const methods = useForm<LoginSchemaType>({
    resolver: zodResolver(loginSchema)
  });
  const onSubmit = async (data: LoginSchemaType) => {
    console.log(data);
  };

  return <Form
    action={loginAction}
    methods={methods}
    onSubmit={onSubmit}
    className='w-xs mx-auto flex flex-col gap-8 border border-gray-100 rounded-2xl box-content p-16 shadow-lg'
  >
    <Heading level={1}>Inicio de sesión</Heading>
    <div className='flex flex-col gap-8 items-center'>
      <FormField inputId={LoginSchemaFieldNames.email} label="Email" error={methods.formState.errors.email?.message}>
        <Input id={LoginSchemaFieldNames.email} type="text" {...methods.register(LoginSchemaFieldNames.email)} />
      </FormField>
      <FormField inputId={LoginSchemaFieldNames.password} label="Contraseña" error={methods.formState.errors.password?.message}>
        <Input id={LoginSchemaFieldNames.password} type="password" {...methods.register(LoginSchemaFieldNames.password)} />
      </FormField>
    </div>
    <Button className='w-full'>Iniciar sesión</Button>
    <HorizontalLine />
    <div className='flex flex-col gap-2'>
      <span className='text-center'>¿Olvidaste tu contraseña? <LinkStyled href={routes.auth.passwordRecovery}>Restablecer</LinkStyled></span>
      <span className='text-center'>¿No tienes una cuenta? <LinkStyled href={routes.auth.register}>Registrate</LinkStyled></span>
    </div>
  </Form>;
};

export default LoginForm;

