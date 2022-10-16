import { ReactNode } from "react"
import Sidebar from "../../components/Sidebar"
import { layout, main, sidebar as nav } from "./styles.css"

type DashbordLayoutProps = {
  children: ReactNode
}

export default function DashboardLayout({ children }: DashbordLayoutProps) {
  return (
    <div className={layout}>
      <nav className={nav}>{<Sidebar />}</nav>
      <main className={main}>{children}</main>
    </div>
  )
}
