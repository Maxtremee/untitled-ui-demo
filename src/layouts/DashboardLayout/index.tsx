import { ReactNode } from "react"
import Sidebar from "@components/Sidebar"
import { layout, main, sidebar } from "./styles.css"

type DashbordLayoutProps = {
  children: ReactNode
}

export default function DashboardLayout({ children }: DashbordLayoutProps) {
  return (
    <div className={layout}>
      <nav className={sidebar}>{<Sidebar />}</nav>
      <main className={main}>{children}</main>
    </div>
  )
}
