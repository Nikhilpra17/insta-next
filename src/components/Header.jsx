"use client";
import Image from "next/image";
import Link from "next/link";
import { signIn, signOut, useSession } from "next-auth/react";

function Header() {
  const { data: session } = useSession();
  return (
    <div className="shadow-sm border-b sticky top-0 bg-white z-30 p-2">
      <div className="flex justify-between items-center max-w-6xl mx-auto">
        {/* Logo */}

        <Link href={"/"} className="hidden lg:inline-flex">
          <Image
            src="/Instagram_logo_black.webp"
            width={96}
            height={96}
            alt="instagram logo"
          />
        </Link>

        <Link href={"/"} className="lg:hidden">
          <Image
            src="/800px-Instagram_logo_2016.webp"
            width={40}
            height={40}
            alt="instagram logo"
          />
        </Link>

        {/* search input  */}

        <input
          type="text"
          placeholder="search"
          className="bg-gray-50 border border-gray-200 rounded text-sm w-full py-2 px-4 max-w-[310px]"
        />

        {/* menu */}

        {session ? (
          <img
            src={session.user.image}
            alt={session.user.name}
            className="h-10 w-10 rounded-full cursor-pointer"
            onClick={signOut}
          />
        ) : (
          <button
            onClick={() => signIn()}
            className="text-sm font-semibold text-blue-500"
          >
            Log In
          </button>
        )}
      </div>
    </div>
  );
}

export default Header;
