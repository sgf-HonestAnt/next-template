"use server";

import prisma from "@@/lib";

export async function deleteExample(formData: FormData) {
  "use server";
  const form = Object.fromEntries(formData.entries());
  try {
    const res = await prisma.example.delete({
      where: { id: form.id.toString() },
    });
    return res;
  } catch (error) {
    console.error(error);
  }
}
