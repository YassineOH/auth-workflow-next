import { signIn } from "next-auth/webauthn";
import "server-only";

export const loginWithGithub = () => {
  return signIn("github");
};
