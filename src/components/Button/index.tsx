"use client";

import { signIn, signOut } from "next-auth/react";
import Image from "next/image";
import { Fragment } from "react";

const cx = "text-black bg-white py-1 px-2 m-2 rounded cursor-pointer";

export const AuthButton = ({ user }: { user: any }) => {
  console.log("session.user", user);
  return user ? (
    <Fragment>
      <Image src={user.image} alt={user.name} width={75} height={75} className='rounded-full m-1 border-2 border-white' />
      Signed in as {user.email ?? "..."}
      <button
        type='button'
        className={cx}
        onClick={() => {
          console.log("signOut");
          signOut();
        }}>
        Sign Out
      </button>
    </Fragment>
  ) : (
    <button
      type='button'
      className={cx}
      onClick={() => {
        console.log("signIn");
        signIn("google");
      }}>
      Sign in to view data
    </button>
  );
};
