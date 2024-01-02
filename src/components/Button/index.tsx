"use client";

import { signIn, signOut } from "next-auth/react";
import { Fragment } from "react";

const cx = "text-black bg-white py-1 px-2 m-2 rounded cursor-pointer";

export const AuthButton = ({ user }: { user: any }) => {
  console.log({ user });
  return user ? (
    <Fragment>
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
      Sign In
    </button>
  );
};
