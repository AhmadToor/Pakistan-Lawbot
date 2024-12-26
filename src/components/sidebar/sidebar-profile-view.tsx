import { Button } from "@/components/ui/button";
import { useAuth } from "@/hooks/useAuth";
import { DropdownMenu, DropdownMenuContent, DropdownMenuTrigger } from "../ui/dropdown-menu";
import { LogOutIcon, Settings } from "lucide-react";
import { Link } from "react-router-dom";
import Changepassword from "@/assets/icons/Changepassword";

export function SidebarProfileFooter() {
  const { handleLogout } = useAuth();
  return (
    <div className="flex justify-between items-center w-full bg-white">
      <div className="flex gap-2 items-center w-full">
        <img
          height="40"
          width="40"
          src={
            // preview ??
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS2TgOv9CMmsUzYKCcLGWPvqcpUk6HXp2mnww&s"
          }
          alt="img"
          className="rounded-full object-cover"
        />
        <p className="text-dark  text-base">
          Zar Wali Khan
        </p>
      </div>
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button className="p-0 bg-white text-dark"> <Settings />  </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent align="end" >
          <div className="w-full flex flex-row items-center gap-2 mb-2">
            <img
              src={
                // preview ??
                "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS2TgOv9CMmsUzYKCcLGWPvqcpUk6HXp2mnww&s"
              }
              alt="img"
              className="h-12 w-12 rounded-full object-cover"
            />
            <div className="flex flex-col w-40 ">
              <p className="font-medium truncate w-full">
                Zar Wali Khan
              </p>
              <p className="text-xs truncate w-full">
                zarwalikhan@email.com
              </p>
            </div>
          </div>
          <div className="w-full flex items-center gap-4 cursor-pointer px-1 py-2.5  hover:bg-gray-200  hover:rounded-md">
            <Link
              to={"/profile"}
              className="w-full flex items-center gap-4 "
            >
              <Changepassword className="text-dark" />{" "}
              <span> Profile</span>
            </Link>
          </div>
          <div
            onClick={handleLogout}
            className="w-full flex items-center gap-4 cursor-pointer px-1 py-2.5 hover:bg-gray-200 hover:rounded-md"
          >
            <LogOutIcon className="text-dark" />
            <span>Logout</span>
          </div>
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  )
}
