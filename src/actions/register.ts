'use server';

import * as z from 'zod';
import { prisma } from '@/lib/prisma';
import { RegisterSchema } from '@/schemas/AuthSchema';
import bcrypt from 'bcryptjs';

export const register = async (data: z.infer<typeof RegisterSchema>) => {
  try {
    const validatedData = RegisterSchema.parse(data);
    if (!validatedData) return { error: 'Inbalid input data' };

    const { email, name, password, passwordConfirmation } = validatedData;

    if (password !== passwordConfirmation) {
      return { error: 'Password do not match' };
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    const userExists = await prisma.user.findFirst({
      where: {
        email,
      },
    });

    if (userExists)
      return { error: 'Email already is in use. Please try another one.' };

    const lowerCaseEmail = email.toLowerCase();

    const user = await prisma.user.create({
      data: {
        email: lowerCaseEmail,
        name,
        password: hashedPassword,
      },
    });

    return { success: `Email verificaltion is sent on ${lowerCaseEmail}` };
  } catch (error) {
    console.error('Database error:', error);
    return { error: 'An error occured' };
  }
};
