"use client";
import React from "react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@radix-ui/react-dropdown-menu";
import { Avatar, AvatarFallback, AvatarImage } from "@radix-ui/react-avatar";
import { useRouter } from "next/navigation";
import { AppRouterInstance } from "next/dist/shared/lib/app-router-context.shared-runtime";
import { Button } from "./ui/button";
import { NavItems } from "./NavItems";

const UseDropdown = () => {
  const router: AppRouterInstance = useRouter();
  const handleSignOut = async () => {
    router.push("/sign-in");
  };

  const user = {
    name: "John",
    email: "john@gmail.com",
  };

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button
          variant="ghost"
          className="flex items-center gap-3 text-gray-400 hover:text-yellow-400"
        >
          <Avatar className="h-8 w-8">
            <AvatarImage
              className="rounded-full"
              src={"https://github.com/shadcn.png"}
            />
            <AvatarFallback className="bg-yellow-500 text-yellow-900 text-sm font-bold rounded-full flex items-center justify-center">
              {user.name.charAt(0)}
            </AvatarFallback>
          </Avatar>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent 
        className="min-w-[240px] bg-gray-800 rounded-md shadow-lg border border-gray-700 p-1 z-50"
        align="end"
        sideOffset={5}
      >
        <DropdownMenuLabel className="px-2 py-1.5">
          <div className="flex items-center gap-3 py-2">
            <Avatar className="h-8 w-8">
              <AvatarImage
                className="rounded-full"
                src={"https://github.com/shadcn.png"}
              />
              <AvatarFallback className="bg-yellow-500 text-yellow-900 text-sm font-bold rounded-full flex items-center justify-center">
                {user.name.charAt(0)}
              </AvatarFallback>
            </Avatar>
            <div className="flex flex-col">
              <span className="text-base font-medium text-gray-100">
                {user.name}
              </span>
              <span className="text-sm text-gray-400">{user.email}</span>
            </div>
          </div>
        </DropdownMenuLabel>
        <DropdownMenuSeparator className="h-px bg-gray-700 my-1" />
        <DropdownMenuItem
          onClick={handleSignOut}
          className="text-gray-100 text-sm font-medium px-2 py-2 rounded cursor-pointer outline-none hover:bg-gray-700 hover:text-yellow-400 focus:bg-gray-700 focus:text-yellow-400 transition-colors"
        >
          Logout
        </DropdownMenuItem>
        <DropdownMenuSeparator className="hidden sm:block h-px bg-gray-700 my-1" />
        <nav className="sm:hidden">
          <NavItems />
        </nav>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default UseDropdown;