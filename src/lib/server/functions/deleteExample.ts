"use server";

import prisma from "@@/lib";
import { redirect } from "next/navigation";

export async function deleteExample(formData: FormData) {
  "use server";
  const form = Object.fromEntries(formData.entries());
  try {
    const res = await prisma.example.delete({
      where: { id: form.id.toString() },
    });
    redirect("/loading");
    return res;
  } catch (error) {
    console.error(error);
  }
}
