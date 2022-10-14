import type { NextPage } from "next"
import { useSession } from "next-auth/react"

const Home: NextPage = () => {
  const user = useSession()

  return (
    <>
      <h1 style={{ marginTop: 0 }}>Customers</h1>
      <p>{JSON.stringify(user)}</p>
    </>
  )
}

export default Home
