import z from 'zod'

export const SIGNUP_VALIDATION_SCHEMA = z.object({
  email: z
    .email('Invalid email')
    .min(1, 'Email is required')
    .max(100, 'Email must be at most 100 characters'),

  password: z
    .string()
    .min(1, 'Password is required')
    .min(8, 'Password must be at least 8 characters')
    .max(32, 'Password must be at most 32 characters')
});
