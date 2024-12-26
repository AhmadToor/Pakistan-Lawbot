import { NavLink } from 'react-router-dom';

import {
  SidebarGroup,
  SidebarMenu,
  SidebarMenuItem,
} from "@/components/ui/sidebar";

export function NavMain({
  items,
}: {
  items: {
    title: string;
    url: string;
    svg: React.ReactNode;
    speclass?: string;
  }[];
}) {
  return (
    <SidebarGroup>
      <SidebarMenu className='mb-1'>
        {items.map((item, index) => (
          <SidebarMenuItem key={index}>
            <NavLink 
              to={item.url} 
              className={({ isActive }) => 
                `hover:bg-primary-600 flex gap-2 w-full border-none text-black rounded-lg text-sm px-2 py-1.5 text-left hover:text-white active:text-white hover:fill-white ${isActive ? 'bg-primary-600 text-white fill-white '  : ' '} `
              }
             
            >
                {item.svg}{item.title}
            </NavLink>
          </SidebarMenuItem>
        ))}
      </SidebarMenu>
    </SidebarGroup>
  );
}