'use server';
import { signIn } from '@/features/auth/auth';
import { LoginSchemaType } from '@/features/auth/login/schemas/loginSchema';

export const loginAction = async (data: LoginSchemaType) => {
  signIn('credentials', data);

  return undefined;
};