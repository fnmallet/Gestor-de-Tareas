import z from 'zod';

export const loginSchema = z.object({
  email: z.intersection(
    z.string().min(1, 'Este campo es obligatorio'),
    z.email('Email inválido')
  ),
  password: z.string().min(1, 'Este campo es obligatorio'),
});

export const LoginSchemaFieldNames = loginSchema.keyof().enum;

export type LoginSchemaType = z.infer<typeof loginSchema>;