import { useSession, signIn, signOut } from "next-auth/react"
export default function Component() {
  const { data: session, status } = useSession();
  if (session) {
    return (
      <>
        Signed with email: {session.user.email} <br />
        Name: {session.user.email} <br />
        Expiration: {session?.expires}<br />
        Accesstoken: {session?.accessToken} <br />
        <button onClick={() => signOut()}>Sign out</button>
      </>
    )
  }
  return (
    <>
      Not signed in <br />
      <button onClick={() => signIn()}>Sign in</button>
    </>
  )
}

{/**This is a test page, we don't need this page. Visit it in browser: http://localhost:3000/loginbtn */}