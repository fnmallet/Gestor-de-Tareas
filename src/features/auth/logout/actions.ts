'use server';
import { signOut } from '@/features/auth/auth';

export const signOutAction = async () => {
  await signOut();
  return { success: true };
};