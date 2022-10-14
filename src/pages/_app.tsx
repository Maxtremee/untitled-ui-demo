import { ThemeProvider } from "next-themes"
import { SessionProvider, signIn } from "next-auth/react"
import type { Session } from "next-auth"
import type { AppType } from "next/app"
import { trpc } from "../utils/trpc"
import DashboardLayout from "../layouts/DashboardLayout"
import { lightTheme, darkTheme } from "../styles/vars.css"
import Button from "../ui/Button"

const MyApp: AppType<{ session: Session | null }> = ({
  Component,
  pageProps: { session, ...pageProps },
}) => {
  return (
    <SessionProvider session={session}>
      <ThemeProvider
        attribute="class"
        value={{
          light: lightTheme,
          dark: darkTheme,
        }}
      >
        <DashboardLayout
          sidebar={
            <Button
              color="secondary"
              onClick={() =>
                signIn(undefined, {
                  callbackUrl: "/",
                })
              }
            >
              Sign In
            </Button>
          }
        >
          <Component {...pageProps} />
        </DashboardLayout>
      </ThemeProvider>
    </SessionProvider>
  )
}

export default trpc.withTRPC(MyApp)
