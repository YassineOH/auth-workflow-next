import { redirect } from "next/navigation";
import React, { ReactNode } from "react";
import { auth } from "~/auth";
import { getUser } from "~/server/queries";

async function Layout({ children }: { children: ReactNode }) {
  const session = await auth();

  console.log(session);
  if (!session || !session.user?.email) {
    redirect("/");
  }

  const isUserExists = await getUser(session.user?.email);

  if (!isUserExists) {
    redirect("/register?origin=dashboard");
  }

  return <>{children}</>;
}

export default Layout;
