import { Data } from "@@/components/Data";
import prisma from "@@/lib/client";
import dayjs from "dayjs";

async function getData() {
  console.log("getData", dayjs().format("HH:mm:ss"));
  const res = await prisma.example.findMany();
  return res;
}

export const dynamic = "force-dynamic";

export default async function Home() {
  const data = await getData();
  return (
    <main className='flex min-h-screen flex-col items-center justify-center p-24'>
      <div className='flex flex-col justify-between align-center text-white bg-pink-500 p-4 rounded'>
        <Data examples={data} />
      </div>
    </main>
  );
}
