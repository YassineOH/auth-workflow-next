'use server';
import { db } from '~/db';
import { users } from '~/db/schema';

export const registerUser = async (formData: FormData) => {
  const email = formData.get('email') as string;
  const name = formData.get('name') as string;
  try {
    await db.insert(users).values({
      email,
      name,
    });
    return 'user registered successfully';
  } catch (error) {
    console.log(error);
  }
};
