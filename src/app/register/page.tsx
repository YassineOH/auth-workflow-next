import { redirect } from "next/navigation";
import React from "react";
import { auth } from "~/auth";
import RegisterForm from "~/components/register/RegisterForm";

async function Register() {
  const session = await auth();

  if (!session || !session.user) {
    redirect("/");
  }

  return (
    <main className="flex h-screen w-full items-center justify-center">
      <RegisterForm user={session.user} />
    </main>
  );
}

export default Register;
