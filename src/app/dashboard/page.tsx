import Link from 'next/link';
import React from 'react';
import { buttonVariants } from '~/components/ui/button';

function Page() {
  return (
    <main className="w-ful container mx-auto flex h-screen items-center justify-center">
      <h1 className="text-4xl font-bold text-primary">Dashboard</h1>
      <Link href="/" className={buttonVariants({ variant: 'outline' })}>
        Home
      </Link>
    </main>
  );
}

export default Page;
