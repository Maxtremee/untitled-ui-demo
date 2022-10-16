import { ReactElement } from "react"
import { useSession } from "next-auth/react"
import { useRouter } from "next/router"
import DashboardLayout from "@layouts/DashboardLayout"
import { trpc } from "@utils/trpc"
import { NextPageWithLayout } from "../_app"
import Text from "@ui/Text"

const Dashboard: NextPageWithLayout = () => {
  const router = useRouter()
  const user = useSession()
  const session = trpc.auth.getSession.useQuery()

  if (user.status === "unauthenticated") {
    router.push("/")
  }

  return (
    <>
      <Text size="display-md">Customers</Text>
      <p style={{ wordBreak: "break-all" }}>{JSON.stringify(user)}</p>
      <p style={{ wordBreak: "break-all" }}>{JSON.stringify(session)}</p>
    </>
  )
}

Dashboard.getLayout = function getLayout(page: ReactElement) {
  return <DashboardLayout>{page}</DashboardLayout>
}

export default Dashboard
