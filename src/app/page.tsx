import Link from 'next/link';
import { signOut } from '~/auth';
import SignedIn from '~/components/auth/SignedIn';
import SignedOut from '~/components/auth/SignedOut';
import { Button, buttonVariants } from '~/components/ui/button';
import { db } from '~/db';

export default async function Home() {
  return (
    <main className="container mx-auto space-y-5 py-12">
      <h1 className="text-center text-4xl text-primary">Auth workflow.</h1>
      <h2 className="text-center text-2xl text-primary">
        Auth.js + drizzle + tanStack
      </h2>
      <div className="flex w-full flex-col items-center justify-center py-12">
        <SignedOut>
          <Link href="/sign-in" className={buttonVariants()}>
            Log in
          </Link>
        </SignedOut>

        <SignedIn>
          <h2>you&apos;re logged In</h2>

          <form
            action={async () => {
              'use server';
              await signOut();
            }}
          >
            <Button type="submit">logged out</Button>
          </form>
        </SignedIn>
      </div>
    </main>
  );
}
