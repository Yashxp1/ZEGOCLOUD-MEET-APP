'use server';

import * as z from 'zod';
import { prisma } from '@/lib/prisma';
import { LoginSchema } from '@/schemas/AuthSchema';
import { signIn } from '@/lib/auth';
import { AuthError } from 'next-auth';

export const login = async (data: z.infer<typeof LoginSchema>) => {
  try {
    const validatedData = LoginSchema.parse(data);

    if (!validatedData) return { message: 'Invalid input fields' };

    const { email, password } = validatedData;

    const userExists = await prisma.user.findFirst({
      where: {
        email: email,
      },
    });

    if (!userExists || !userExists.password || !userExists.email)
      return { message: 'email or password is incorrect' };

    await signIn('credentials', {
      email: userExists.email,
      password: password,
      redirectTo: '/home',
    });
  } catch (error) {
    if (error instanceof AuthError) {
      switch (error.type) {
        case 'CredentialsSignin':
          return { error: 'Invalid credentials' };
        default:
          return { error: 'Please confirm your email address' };
      }
    }

    throw error;
  }
  return { success: 'User logged in successfully' };
};
