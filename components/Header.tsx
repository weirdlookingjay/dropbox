import Image from "next/image";
import Link from "next/link";
import { UserButton, SignedOut, SignInButton } from "@clerk/nextjs";
import { ThemeToggler } from "./ThemeToggler";
import Logo from "../public/images/FileDrop-Logo.png";

function Header() {
  return (
    <header className="flex items-center justify-between">
      <Link href="/" className="flex items-center space-x-2">
        <div className="w-fit">
          <Image
            // src="https://www.shareicon.net/download/2016/07/13/606936_dropbox_2048x2048.png"
            src={Logo}
            alt="logo"
            height={80}
            width={80}
          />
        </div>
        <h1 className="font-bold text-xl">FileDrop</h1>
      </Link>

      <div className="px-5 flex space-x-2 items-center">
        <ThemeToggler />

        <UserButton afterSignOutUrl="/" />

        <SignedOut>
          <SignInButton afterSignInUrl="/dashboard" mode="modal" />
        </SignedOut>
      </div>
    </header>
  );
}

export default Header;
