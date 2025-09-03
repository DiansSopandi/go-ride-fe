import { Bell, MenuIcon, User, X } from "lucide-react"

export default function DashboardNavbar({ onMenuClick }: { onMenuClick: () => void }) {
  return (
    // <header className="bg-background border-b border-border px-4 py-3 flex justify-between items-center">
    <header className=" flex items-center justify-between py-4 px-10 mx-4 border-b border-border bg-background rounded-md">
      {/* <button onClick={onMenuClick} className="md:hidden text-muted-foreground">
        <X className="w-6 h-6" />
      </button> */}
      <h1 className="text-lg font-semibold">Welcome Back 👋</h1>
      <div className="flex items-center gap-4">
        <Bell className="w-5 h-5 text-muted-foreground" />
        <User className="w-5 h-5 text-muted-foreground" />
      </div>
    </header>
  )
}