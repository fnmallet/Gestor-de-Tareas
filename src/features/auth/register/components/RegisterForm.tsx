'use client';
import FormField from '@/components/FormField';
import Input from '@/components/Input';
import { registerAction } from '@/features/auth/register/actions';
import { useForm } from 'react-hook-form';
import { registerSchema, RegisterSchemaFieldNames, RegisterSchemaType } from '@/features/auth/register/schemas/registerSchema';
import Form from '@/components/Form';
import { routes } from '@/constants/routes';
import LinkStyled from '@/components/LinkStyled';
import Button, { buttonClasses } from '@/components/Button';
import { zodResolver } from '@hookform/resolvers/zod';
import Heading from '@/components/Heading';
import Tooltip from '@/components/Tooltip';
import { cn } from '@/utils/cn';

const RegisterForm = () => {
  const methods = useForm<RegisterSchemaType>({
    resolver: zodResolver(registerSchema)
  });
  const onSubmit = async (data: RegisterSchemaType) => {
    console.log(data);
    console.log(methods.getValues());
  };
    
  return <Form
    action={registerAction}
    methods={methods}
    onSubmit={onSubmit}
    className='w-xs mx-auto flex flex-col gap-4 border border-gray-100 rounded-2xl box-content p-16 shadow-lg'
  >
    <Heading level={1}>Registro</Heading>
    <div className='flex flex-col gap-8 items-center mb-4'>
      <FormField 
        label="Email*" 
        inputId={RegisterSchemaFieldNames.email} 
        error={methods.formState.errors.email?.message}
      >
        <Input id={RegisterSchemaFieldNames.email} {...methods.register(RegisterSchemaFieldNames.email)} />
      </FormField>
      <FormField
        label="Nombre"
        inputId={RegisterSchemaFieldNames.name} 
        error={methods.formState.errors.name?.message}
      >
        <Input type="text" id={RegisterSchemaFieldNames.name} {...methods.register(RegisterSchemaFieldNames.name)} />
      </FormField>
      <FormField 
        label={
          <div className='flex gap-2 items-center'>
            <span>Contraseña*</span>
            <Tooltip type="info" content={<div className='flex flex-col gap-2'>
              <p>La contraseña debe tener:</p>
              <ul className='list-disc list-inside'>
                <li>Entre 3 y 15 caracteres.</li>
                <li>Al menos una mayúscula y una minúscula.</li>
              </ul>
            </div>} />
          </div>
        } 
        inputId={RegisterSchemaFieldNames.password}
        error={methods.formState.errors.password?.message}
      >
        <Input type="password" id={RegisterSchemaFieldNames.password} {...methods.register(RegisterSchemaFieldNames.password)} />
      </FormField>
    </div>
    <Button className={cn(buttonClasses, 'w-full')} type='submit'>Registrarse</Button>
    <div className='h-px w-full bg-gray-500'></div>
    <span className='text-center'>¿Ya tienes una cuenta? <LinkStyled href={routes.auth.login}>Iniciá sesión</LinkStyled></span>
  </Form>;
};

export default RegisterForm;