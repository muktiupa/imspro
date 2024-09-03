import { TooltipProvider, Tooltip, TooltipTrigger, TooltipContent } from "@/components/ui/tooltip"
import Link from "next/link"
import {SignalIcon,SettingsIcon,SearchIcon,SchoolIcon,RouteIcon,LassoIcon} from "./Icon";




const Sidebarx=()=>{

return (
    <aside
    className="fixed inset-y-0 left-0 z-10 hidden w-14 flex-col border-r bg-background sm:flex">
    <nav className="flex flex-col items-center gap-4 px-2 sm:py-5">
      <TooltipProvider>
        <Link
          href="/"
          className="group flex h-9 w-9 shrink-0 items-center justify-center gap-2 rounded-full bg-primary text-lg font-semibold text-primary-foreground md:h-8 md:w-8 md:text-base"
          prefetch={false}>
          <LassoIcon className="h-4 w-4 transition-all group-hover:scale-110" />
          <span className="sr-only">LMS</span>
        </Link>
        <Tooltip>
          <TooltipTrigger asChild>
            <Link
              href="/enquirymanagement"
              className="flex h-9 w-9 items-center justify-center rounded-lg text-muted-foreground transition-colors hover:text-foreground md:h-8 md:w-8"
              prefetch={false}>
              <SearchIcon className="h-5 w-5" />
              <span className="sr-only">Inquiry Management</span>
            </Link>
          </TooltipTrigger>
          <TooltipContent side="right">Inquiry Management</TooltipContent>
        </Tooltip>
        <Tooltip>
          <TooltipTrigger asChild>
            <Link
              href="#"
              className="flex h-9 w-9 items-center justify-center rounded-lg text-muted-foreground transition-colors hover:text-foreground md:h-8 md:w-8"
              prefetch={false}>
              <SignalIcon className="h-5 w-5" />
              <span className="sr-only">Notification Management</span>
            </Link>
          </TooltipTrigger>
          <TooltipContent side="right">Notification Management</TooltipContent>
        </Tooltip>
        <Tooltip>
          <TooltipTrigger asChild>
            <Link
              href="/studentmanagement"
              className="flex h-9 w-9 items-center justify-center rounded-lg text-muted-foreground transition-colors hover:text-foreground md:h-8 md:w-8"
              prefetch={false}>
              <SchoolIcon className="h-5 w-5" />
              <span className="sr-only">Student Management</span>
            </Link>
          </TooltipTrigger>
          <TooltipContent side="right">Student Management</TooltipContent>
        </Tooltip>
        <Tooltip>
          <TooltipTrigger asChild>
            <Link
              href="/coursemanagement"
              className="flex h-9 w-9 items-center justify-center rounded-lg text-muted-foreground transition-colors hover:text-foreground md:h-8 md:w-8"
              prefetch={false}>
              <RouteIcon className="h-5 w-5" />
              <span className="sr-only">Courses Management</span>
            </Link>
          </TooltipTrigger>
          <TooltipContent side="right">Courses Management</TooltipContent>
        </Tooltip>
      </TooltipProvider>
    </nav>
    <nav className="mt-auto flex flex-col items-center gap-4 px-2 sm:py-5">
      <TooltipProvider>
        <Tooltip>
          <TooltipTrigger asChild>
            <Link
              href="#"
              className="flex h-9 w-9 items-center justify-center rounded-lg text-muted-foreground transition-colors hover:text-foreground md:h-8 md:w-8"
              prefetch={false}>
              <SettingsIcon className="h-5 w-5" />
              <span className="sr-only">Settings</span>
            </Link>
          </TooltipTrigger>
          <TooltipContent side="right">Settings</TooltipContent>
        </Tooltip>
      </TooltipProvider>
    </nav>
  </aside>

      )

}
export default Sidebarx;
