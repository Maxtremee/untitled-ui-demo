import type { NextPage } from "next"
import { signIn, useSession } from "next-auth/react"
import { useRouter } from "next/router"
import Button from "@ui/Button"
import Text from "@ui/Text"
import { index } from "@styles/index.css"

const Home: NextPage = () => {
  const router = useRouter()
  const session = useSession()

  if (session.status === "authenticated") {
    router.push("/dashboard")
  }

  return (
    <div className={index}>
      <Text size="display-2xl">Untitled UI</Text>
      <Button
        background="primary"
        disabled={session.status === "loading"}
        onClick={() =>
          signIn(undefined, {
            callbackUrl: "/dashboard",
          })
        }
      >
        <Text>Sign In</Text>
      </Button>
    </div>
  )
}

export default Home
