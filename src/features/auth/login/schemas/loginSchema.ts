import z from 'zod';

export const loginSchema = z.object({
  email: z.email().min(1, 'Este campo es obligatorio'),
  password: z.string().min(1, 'Este campo es obligatorio'),
});

export const LoginSchemaFieldNames = loginSchema.keyof().enum;

export type LoginSchemaType = z.infer<typeof loginSchema>;