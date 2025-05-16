"use client";

import {
  SignedIn,
  SignedOut,
  SignInButton,
  SignUpButton,
  UserButton,
  useUser,
} from "@clerk/nextjs";
import { LayoutDashboard } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { Button } from "./ui/button";
import { BarLoader } from "react-spinners";

const Nav = () => {
  const { isLoaded } = useUser();

  return (
    <>
      <nav className="fixed top-0 z-50 container mx-auto flex h-16 w-full flex-row items-center justify-between px-4">
        <Link href="/" className="flex items-center gap-2">
          <Image
            src={"/logo.png"}
            alt="logo"
            width={170}
            height={60}
            priority
            className="object-contain"
          />
        </Link>

        <div className="flex flex-row items-center gap-4">
          <SignedIn>
            <Link href="/dashboard">
              <Button
                variant="outline"
                className="hidden hover:border-blue-600 hover:text-blue-600 md:inline-flex"
              >
                <LayoutDashboard className="h-4 w-4" />
                Dashboard
              </Button>
              <Button variant="ghost" className="h-10 w-10 md:hidden">
                <LayoutDashboard className="h-4 w-4" />
              </Button>
            </Link>

            <UserButton />
          </SignedIn>

          <SignedOut>
            <SignInButton>
              <Button variant="ghost">Sign In</Button>
            </SignInButton>

            <SignUpButton>
              <Button className="bg-blue-600 hover:bg-blue-700">
                Get Started
              </Button>
            </SignUpButton>
          </SignedOut>
        </div>
      </nav>

      {!isLoaded && (
        <BarLoader
          width={"100%"}
          color="#2563eb"
          className="fixed top-16 z-50"
        />
      )}
    </>
  );
};

export default Nav;
