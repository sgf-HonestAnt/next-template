"use server";

import prisma from "@@/lib";
import { redirect } from "next/navigation";

export async function createExample(formData: FormData) {
  "use server";
  const form = Object.fromEntries(formData.entries());
  try {
    const res = await prisma.example.create({
      data: {
        name: form.name.toString(),
        email: form.email.toString(), //
      },
    });
    redirect("/loading");
    return res;
  } catch (error) {
    console.error(error);
  }
}
