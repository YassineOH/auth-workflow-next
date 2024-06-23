import { db } from "~/db";

export const getUser = async (email: string) => {
  const user = await db.query.users.findFirst({
    where: (u, { eq }) => eq(u.email, email),
  });

  return !!user;
};
