import { AuthButton } from "@@/components";
import { Data } from "@@/components/Data";
import prisma from "@@/lib/client";
import dayjs from "dayjs";
import { getServerSession } from "next-auth";

async function getData() {
  console.log("getData", dayjs().format("HH:mm:ss"));
  const res = await prisma.example.findMany();
  return res;
}

async function checkUser(user: any) {
  const res = await prisma.appUser.findUnique({
    where: {
      email: user.email ?? "",
    },
  });
  if (res) return res;
  const newUser = await prisma.appUser.create({
    data: {
      email: user.email ?? "",
      name: user.name ?? "",
      image: user.image ?? "",
    },
  });
  return newUser;
}

export const dynamic = "force-dynamic";

export default async function Home() {
  const data = await getData();
  const session = await getServerSession();
  const user = await checkUser(session?.user);
  console.log({ user });
  return (
    <main className='flex min-h-screen flex-col items-center justify-center p-24'>
      <AuthButton user={session?.user} />
      <div className='my-3 flex flex-col justify-between align-center text-white bg-pink-500 p-4 rounded'>
        <Data examples={data} />
      </div>
    </main>
  );
}
