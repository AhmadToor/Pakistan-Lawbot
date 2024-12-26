import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import Sent from "@/assets/icons/sent"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { ChevronDown } from "lucide-react"
interface SearchBarProps {
    placeholder: string,
    value?: string,
    onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
    onSubmit?: (event: React.FormEvent<HTMLFormElement>) => void;
    isAdvanced?: boolean;
}

export function SearchBar({isAdvanced, placeholder, value,onChange,onSubmit}: SearchBarProps) {
  return (
    <form className="flex w-full items-center space-x-2  " onSubmit={onSubmit}>
      <Input type="text" placeholder={placeholder} value={value} onChange={onChange} className="h-[2.7rem] text-xs text-black rounded-[30px] bg-[#DFE0DF99]/60 placeholder-black" />
      <Button type="submit" className="items-center flex rounded-full h-[2rem] w-[2rem] py-1 px-2" style={{ marginLeft: '-38px' }}>
        <Sent />
      </Button>
      {isAdvanced && (
        <div className="gap-3 hidden sm:flex flex-row" style={{marginLeft:'-235px'}}>

        <DropdownMenu>
        <DropdownMenuTrigger className="text-gray-600 text-xs  border-b-[1px] border-gray-300 flex" >Select year <ChevronDown/></DropdownMenuTrigger>
        <DropdownMenuContent>
          <DropdownMenuLabel>Select Year</DropdownMenuLabel>
          <DropdownMenuSeparator />
          <DropdownMenuItem>2024</DropdownMenuItem>
          <DropdownMenuItem>2023</DropdownMenuItem>
          <DropdownMenuItem>2022</DropdownMenuItem>
          <DropdownMenuItem>2021</DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>

        <DropdownMenu>
        <DropdownMenuTrigger className="text-gray-600 text-xs  border-b-[1px] border-gray-300 flex "  >Select journal  <ChevronDown/></DropdownMenuTrigger>
        <DropdownMenuContent>
          <DropdownMenuLabel>My Journals</DropdownMenuLabel>
          <DropdownMenuSeparator />
          <DropdownMenuItem>Profile</DropdownMenuItem>
          <DropdownMenuItem>Billing</DropdownMenuItem>
          <DropdownMenuItem>Team</DropdownMenuItem>
          <DropdownMenuItem>Subscription</DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
      
        </div>
      )}

    </form>
  )
}