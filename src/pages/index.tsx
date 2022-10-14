import type { NextPage } from "next"
import { useSession } from "next-auth/react"
import { trpc } from "../utils/trpc"

const Home: NextPage = () => {
  const user = useSession()
  const session = trpc.auth.getSession.useQuery()

  return (
    <>
      <h1 style={{ marginTop: 0 }}>Customers</h1>
      <p style={{ wordBreak: "break-all" }}>{JSON.stringify(user)}</p>
      <p style={{ wordBreak: "break-all" }}>{JSON.stringify(session)}</p>
    </>
  )
}

export default Home
