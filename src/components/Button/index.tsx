"use client";

import { chatCompletion } from "@@/utils/openai";
import { signIn, signOut } from "next-auth/react";
import Image from "next/image";
import { Fragment, useState } from "react";

const cx = "text-black bg-white py-1 px-2 m-2 rounded cursor-pointer";

export const AIButton = () => {
  const [result, setResult] = useState<{}>({});
  return (
    <Fragment>
      <button
        className='border rounded p-1'
        onClick={async () => {
          const res = await chatCompletion();
          if (!res) return;
          setResult(res);
        }}
        type='button'>
        AI Chat
      </button>
      {JSON.stringify(result)}
    </Fragment>
  );
};

export const AuthButton = ({ user }: { user: any }) => {
  console.log("session.user", user);
  return user ? (
    <Fragment>
      <Image
        src={user.image}
        alt={user.name}
        width={75}
        height={75}
        className='rounded-full m-1 border-2 border-white'
      />
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
