"use server";

import prisma from "@@/lib";

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
    return res;
  } catch (error) {
    console.error(error);
  }
}
