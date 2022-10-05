import type { AppProps } from "next/app"
import { ThemeProvider } from "next-themes"
import DashboardLayout from "../layouts/DashboardLayout"
import { lightTheme, darkTheme } from "../styles/vars.css"

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider
      attribute="class"
      value={{
        light: lightTheme,
        dark: darkTheme,
      }}
    >
      <DashboardLayout sidebar={<h6>sidebar</h6>}>
        <Component {...pageProps} />
      </DashboardLayout>
    </ThemeProvider>
  )
}
