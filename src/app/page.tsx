import { AuthButton } from "@@/components";
import { Data } from "@@/components/Data";
import { Session, getServerSession } from "next-auth";
import dayjs from "dayjs";
import prisma from "@@/lib";

async function getUserData() {
  const res = await prisma.appUser.findMany();
  console.log("getUserData", dayjs().format("HH:mm:ss"));
  return res;
}

async function getExampleData() {
  const res = await prisma.example.findMany();
  console.log("getExampleData", dayjs().format("HH:mm:ss"));
  return res;
}

async function getOrCreateUser(query: {
  where: {
    email: string;
    name: string;
    image: string | null;
  };
}) {
  let res = await prisma.appUser.findFirst(query);
  if (!res) {
    console.log("createUser");
    res = await prisma.appUser.create({ data: query.where });
  }
  console.log("getUser", dayjs().format("HH:mm:ss"), res);
  return res;
}

export const dynamic = "force-dynamic";

export default async function Home() {
  const exampleData = await getExampleData();
  const userData = await getUserData();
  const session: Session | null = await getServerSession();
  if (session?.user && session.user.email && session.user.name) {
    await getOrCreateUser({
      where: {
        email: session.user.email,
        name: session.user.name,
        image: session.user.image ?? null,
      },
    });
  }
  return (
    <main className='flex min-h-screen flex-col items-center justify-center p-24'>
      <AuthButton user={session?.user} />
      <div className='my-3 flex flex-col justify-between align-center text-white bg-pink-500 p-4 rounded'>
        {session?.user && <Data examples={exampleData} />}
        {!session?.user && (
          <div>
            Found {userData.length} user{userData.length === 1 ? "" : "s"} and{" "}
            {exampleData.length} example{exampleData.length === 1 ? "" : "s"} in
            db
          </div>
        )}
      </div>
    </main>
  );
}
