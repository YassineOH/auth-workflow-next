'use client';

import { type User } from 'next-auth';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { Button } from '~/components/ui/button';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '~/components/ui/form';
import { Input } from '~/components/ui/input';

import { z } from 'zod';
import { useRegisterUser } from '~/hooks/registerUser';

const formSchema = z.object({
  name: z
    .string({ message: 'this field is required' })
    .min(2, { message: 'at least two characters' })
    .max(50),
  email: z.string().email({ message: 'please enter a valid email' }),
});

type FormSchema = z.infer<typeof formSchema>;

interface Props {
  user: User;
}

function RegisterForm({ user }: Props) {
  const form = useForm<FormSchema>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: user?.email || '',
      name: user?.name || '',
    },
    mode: 'onBlur',
  });

  const { mutate: registerUser, isPending } = useRegisterUser();

  const onSubmit = ({ email, name }: FormSchema) => {
    const formData = new FormData();
    formData.set('name', name);
    formData.set('email', email);
    registerUser(formData);
  };

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        // onS
        className="w-auto space-y-8 rounded-md border p-4 lg:min-w-96"
      >
        <FormField
          control={form.control}
          name="name"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Name</FormLabel>
              <FormControl>
                <Input {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Email</FormLabel>
              <FormControl>
                <Input type="email" {...field} disabled />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button type="submit" disabled={!form.formState.isValid || isPending}>
          Submit
        </Button>
      </form>
    </Form>
  );
}

export default RegisterForm;
