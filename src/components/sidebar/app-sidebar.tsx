import * as React from "react"
import Logo from "../../assets/icons/Logo";
import { NavMain } from "@/components/sidebar/nav-main"
import { SidebarProfileFooter } from "@/components/sidebar/sidebar-profile-view"
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarRail,
  SidebarProvider
} from "@/components/ui/sidebar"
import Dashboard1 from '../../assets/icons/Dashboard1'
import Dashboard2 from "../../assets/icons/Dashboard2";
import Dashboard3 from "../../assets/icons/Dashboard3";
import Dashboard4 from "../../assets/icons/Dashboard4";
import { ChatHistory } from "./chat-history";



export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {

  const data = {
    navMain: [
      {
        title: "Start a new chat",
        url: "/",
        svg : <Dashboard1/>,
      },
      {
        title: "Judgement",
        url: "/judgement",
        svg : <Dashboard2/>,
      },
      {
        title: "Statuses",
        url: "/statuses",
        svg : <Dashboard3/>
      },
      {
        title: "Drafts",
        url: "/drafts",
        svg : <Dashboard4/>
      },
    ],
  }
  return (
    <SidebarProvider>
      <Sidebar {...props} className="bg-white md:px-6 px-2 hidden md:flex overflow-y-scroll no-scrollbar  pb-0 overflow-x-hidden w-[23%] ">
      <SidebarHeader className="sticky top-0 md:top-3 z-[5] bg-white">
        <SidebarMenu>
          <SidebarMenuItem>
            <SidebarMenuButton size="lg" asChild>
              <>
              <Logo /><hr className="mt-3   w-full" />
              </>
            </SidebarMenuButton>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarHeader>
      <SidebarContent className=" mt-0 md:sticky md:top-[70px] bg-white">
        <NavMain items={data.navMain} />
      </SidebarContent>
      <SidebarContent className="gap-0  h-full">
        <h3 className="font-bold md:sticky md:top-[13.33rem] py-2 bg-white text-sm ">Chat History</h3>
        <ChatHistory/>
      </SidebarContent>
      <SidebarFooter className="self-start bg-white sticky bottom-0 w-full mt-auto p-0 pb-2">
        <div>
          <hr className="my-2" />
          <SidebarProfileFooter />
        </div>
      </SidebarFooter>
      <SidebarRail />
    </Sidebar>
    </SidebarProvider>
  )
}
