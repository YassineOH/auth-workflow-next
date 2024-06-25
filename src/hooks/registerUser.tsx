'use client';

import { useMutation } from '@tanstack/react-query';
import { useRouter } from 'next/navigation';
import { registerUser } from '~/server/actions';
import { signOut } from '~/auth';

export const useRegisterUser = () => {
  const { push } = useRouter();

  return useMutation({
    mutationFn: registerUser,
    onSuccess: () => {
      push('/dashboard');
    },
    onError: async (err) => {
      console.log(err);
      window.alert('something went wrong');
      await signOut({
        redirectTo: '/',
      });
    },
  });
};
