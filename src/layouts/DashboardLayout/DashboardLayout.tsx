import { ReactNode } from "react"
import { layout, main, sidebar as nav } from "./styles.css"

type DashbordLayoutProps = {
  sidebar: ReactNode
  children: ReactNode
}

export default function DashboardLayout({
  sidebar,
  children,
}: DashbordLayoutProps) {
  return (
    <div className={layout}>
      <nav className={nav}>{sidebar}</nav>
      <main className={main}>{children}</main>
    </div>
  )
}
