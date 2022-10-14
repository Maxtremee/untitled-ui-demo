import { signIn, signOut } from "next-auth/react"
import Button from "../../ui/Button"
import { trpc } from "../../utils/trpc"

export default function Sidebar() {
  const session = trpc.auth.getSession.useQuery()

  if (session.isLoading) {
    return (
      <Button background="neutral" disabled>
        Loading
      </Button>
    )
  }

  if (session.data?.user) {
    return <Button onClick={() => signOut()}>Sign out</Button>
  }

  if (!session.data?.user) {
    return (
      <Button
        background="neutral"
        onClick={() =>
          signIn(undefined, {
            callbackUrl: "/",
          })
        }
      >
        Sign In
      </Button>
    )
  }
  return null
}
