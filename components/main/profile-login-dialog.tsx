import React from "react";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { signIn, signOut, useSession } from "next-auth/react";
import { HiOutlineUser } from "react-icons/hi";

import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Button } from "../ui/button";
import { Label } from "../ui/label";
import { Input } from "../ui/input";
import { Copy } from "lucide-react";
import GoogleButton from "@/app/cart/_components/buttons/GoogleButton";
import GithubButton from "@/app/cart/_components/buttons/GithubButton";

const ProfileLoginDialog = () => {
  // Get the user data from the session upon login
  const { data: session } = useSession();
  return (
    <div>
      {session?.user?.email ? (
        <Avatar onClick={() => signOut()}>
          <AvatarImage src={session?.user?.image || ""} />
          <AvatarFallback>P</AvatarFallback>
        </Avatar>
      ) : (
        <>
          {/* Login functionality here */}
          <Dialog>
            <DialogTrigger asChild>
              <div className="nav-links">
                <HiOutlineUser size={20} />
              </div>
            </DialogTrigger>
            <DialogContent className="sm:max-w-md">
              <DialogHeader>
                <DialogTitle>Login</DialogTitle>
                <DialogDescription>
                  Please login with any of these auth providers.
                </DialogDescription>
              </DialogHeader>
              <div className="flex items-center space-x-2">
                <div className="grid flex-1 gap-2">
                  <GoogleButton />
                  <GithubButton />
                </div>
              </div>
            </DialogContent>
          </Dialog>
        </>
      )}
    </div>
  );
};

export default ProfileLoginDialog;
