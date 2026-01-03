// src/components/Layout.tsx
import { Outlet } from "react-router-dom";
import { Separator } from "@/components/ui/separator";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Input } from "./ui/input";
import { InputGroup, InputGroupAddon, InputGroupInput } from "./ui/input-group";
import {
  Languages,
  LayoutDashboardIcon,
  Monitor,
  Moon,
  Search,
  Settings,
  Sun,
  Users,
} from "lucide-react";

export function Layout() {
  return (
    <div className="min-h-screen flex bg-background">
      {/* Sidebar */}
      <aside className="w-64 shadow bg-card">
        <div className="p-4 font-bold text-lg">Secure MFA</div>

        <Separator />

        <nav className="p-4 space-y-2">
          <Button variant="ghost" className="w-full justify-start">
            <LayoutDashboardIcon />
            Dashboard
          </Button>
          <Button variant="ghost" className="w-full justify-start">
            <Users />
            Users
          </Button>
          <Button variant="ghost" className="w-full justify-start">
            <Settings />
            Settings
          </Button>
        </nav>
      </aside>

      {/* Main section */}
      <div className="flex-1 flex flex-col">
        {/* Navbar */}
        <header className="py-3 border-b bg-card flex items-center justify-between px-6">
          <InputGroup>
            <InputGroupInput placeholder="Search..." />
            <InputGroupAddon>
              <Search />
            </InputGroupAddon>
          </InputGroup>

          <Button
            variant="ghost"
            size={"icon"}
            className="rounded-full hover:shadow transition-all duration-300"
          >
            <Languages />
          </Button>
          <Button
            variant="ghost"
            size={"icon"}
            className="rounded-full hover:shadow transition-all duration-300 cursor-pointer"
          >
            <Moon />
            {/* <Sun />
            <Monitor /> */}
          </Button>

          {/* User menu */}
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost" className="flex items-center gap-2">
                <Avatar className="h-8 w-8">
                  <AvatarFallback>JK</AvatarFallback>
                </Avatar>
                <span className="text-sm">Jamal</span>
              </Button>
            </DropdownMenuTrigger>

            <DropdownMenuContent align="end">
              <DropdownMenuItem>Profile</DropdownMenuItem>
              <DropdownMenuItem>Logout</DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </header>

        {/* Content */}
        <main className="flex-1 p-6">
          <Outlet />
        </main>
      </div>
    </div>
  );
}
