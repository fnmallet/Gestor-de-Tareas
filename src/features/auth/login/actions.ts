'use server';
import { appPath, routes } from '@/constants/routes';
import { signIn } from '@/features/auth/auth';
import { LoginSchemaType } from '@/features/auth/login/schemas/loginSchema';
import { AuthError } from 'next-auth';

export const loginAction = async (data: LoginSchemaType) => {
  try {
    await signIn('credentials', { ...data, redirectTo: routes[appPath].dashboard });
    return { success: true };
  } catch (error) {
    if (error instanceof AuthError) {
      switch (error.type) {
        case 'CredentialsSignin':
          return { error: 'Credenciales inválidas.' };
        default:
          return { error: 'Algo salió mal. Intente nuevamente.' };
      }
    }
    throw error;
  }
};