import Link from "../Link"
import { signOut } from "next-auth/react"
import { GearIcon, HomeIcon, MaskOnIcon, PinRightIcon } from "@radix-ui/react-icons"
import Button from "@ui/Button"
import Text from "@ui/Text"
import { trpc } from "@utils/trpc"
import {
  appName,
  avatar,
  expanded,
  icon,
  logoutIcon,
  sidebarLink,
  user,
  userLink,
} from "./styles.css"
import Divider from "@ui/Divider"

export default function Sidebar() {
  const session = trpc.auth.getSession.useQuery()

  return (
    <>
      <div className={appName}>
        <div className={icon}>
          <MaskOnIcon />
        </div>
        <div className={expanded}>
          <Text size="display-sm">Untitled UI</Text>
        </div>
      </div>
      <Link href="/dashboard" className={sidebarLink}>
        <div className={icon}>
          <HomeIcon height="100%" width="100%" />
        </div>

        <div className={expanded}>
          <Text size="small">Home</Text>
        </div>
      </Link>

      <div style={{ flexGrow: 1 }} />
      <Link href="/settings" className={sidebarLink}>
        <div className={icon}>
          <GearIcon height="100%" width="100%" />
        </div>

        <div className={expanded}>
          <Text size="small">Settings</Text>
        </div>
      </Link>
      <Divider />
      {session.data?.user && (
        <div
          onClick={() =>
            signOut({
              callbackUrl: "/",
            })
          }
          className={userLink}
        >
          <img
            src={session.data?.user?.image || ""}
            alt="profile picture"
            className={avatar}
          />
          <div className={user}>
            <div>
              <Text size="small" weight="semibold">
                {session.data?.user?.name}
              </Text>
              <Text color="gray-100" size="small">
                {session.data?.user?.email}
              </Text>
            </div>
            <PinRightIcon />
          </div>
        </div>
      )}
    </>
  )
}
