"use client";
import { useSession, signIn, signOut } from "next-auth/react";
export default function Component() {
  const { data: session, status } = useSession();
  if (session) {
    return (
      <>
        Signed with email: {session?.user?.email} <br />
        Name: {session?.user?.email} <br />
        Expiration: {session?.expires}
        <br />
        <button onClick={() => signOut()}>Sign out</button>
      </>
    );
  }
  return (
    <>
      Not signed in <br />
      <button onClick={() => signIn()}>Sign in</button>
    </>
  );
}
