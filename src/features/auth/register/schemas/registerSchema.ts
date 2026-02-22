import z from 'zod';

const minPasswordLength = 3;
const maxPasswordLength = 15;

export const registerSchema = z.object({
  email: z.email( { error: issue => {
    if(typeof issue.input === 'string' && issue.input.length === 0)
      return 'Este campo es obligatorio';
    return 'El email es inválido';      
  }}),
  name: z.string().optional(),
  password: z.string().min(1, 'Este campo es obligatorio')
    .min(minPasswordLength, `Debe tener entre ${minPasswordLength} y ${maxPasswordLength} caracteres`)
    .max(maxPasswordLength)
    .regex(/[A-Z]/, 'Debe tener al menos una mayúscula')
    .regex(/[a-z]/, 'Debe tener al menos una minúscula')
});

export const RegisterSchemaFieldNames = registerSchema.keyof().enum;

export type RegisterSchemaType = z.infer<typeof registerSchema>;