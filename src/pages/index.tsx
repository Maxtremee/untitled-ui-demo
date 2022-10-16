import type { NextPage } from "next"
import { signIn, useSession } from "next-auth/react"
import { useRouter } from "next/router"
import Button from "../ui/Button"
import { index } from "./index.css"

const Home: NextPage = () => {
  const router = useRouter()
  const session = useSession()

  if (session.status === "authenticated") {
    router.push("/dashboard")
  }

  return (
    <div className={index}>
      <h1>Untitled UI</h1>
      <Button
        background="primary"
        onClick={() =>
          signIn(undefined, {
            callbackUrl: "/dashboard",
          })
        }
      >
        Sign In
      </Button>
    </div>
  )
}

export default Home
