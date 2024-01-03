"use server";

import prisma from "@@/lib";

export async function createExample(formData: FormData) {
  "use server";
  const form = Object.fromEntries(formData.entries());
  try {
    const res = await prisma.appUser.create({
      data: {
        name: form.name.toString(),
        email: form.email.toString(),
        image: form.image ? form.image.toString() : undefined,
      },
    });
    return res;
  } catch (error) {
    console.error(error);
  }
}
