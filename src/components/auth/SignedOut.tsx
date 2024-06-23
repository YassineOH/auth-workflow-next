"use server";

import { ReactNode } from "react";
import { auth } from "~/auth";

async function SignedOut({ children }: { children: ReactNode }) {
  const session = await auth();

  if (session) return null;
  return <>{children}</>;
}

export default SignedOut;
