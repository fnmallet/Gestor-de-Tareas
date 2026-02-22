'use server';
import { signIn } from '@/features/auth/auth';
import { loginSchema } from './schemas/loginSchema';

export const loginAction = async (formData: FormData) => {
  const formValues = Object.fromEntries(formData.entries());

  const validatedData = loginSchema.parse(formValues);

  await signIn('credentials', validatedData);
};