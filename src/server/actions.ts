"server only";

import { db } from "~/db";
import { users } from "~/db/schema";

export const registerUser = async (name: string, email: string, id: string) => {
  await db.insert(users).values({
    email,
    name,
    id,
  });
};
