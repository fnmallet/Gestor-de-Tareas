'use server';

import prisma from '@/lib/prisma';
import { saltAndHashPassword } from '@/utils/password';
import { registerSchema } from '@/features/auth/register/schemas/registerSchema';

export const registerAction = async (formData: FormData) => {
  const formValues = Object.fromEntries(formData.entries());

  const validatedData = registerSchema.parse(formValues);

  validatedData.password = await saltAndHashPassword(validatedData.password);

  await prisma.user.create({
    data: validatedData
  });
};