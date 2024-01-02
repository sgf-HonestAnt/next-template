"use server";
import prisma from "@@/lib/client";
import { redirect } from "next/navigation";

export async function createExample(formData: FormData) {
  "use server";
  console.log("createExamples");
  const form = Object.fromEntries(formData.entries()); // <-- FormData to Object
  try {
    const res = await prisma.example.create({
      // <-- Create a new record
      data: {
        name: form.name.toString(),
        email: form.email.toString(),
      },
    });
    return res;
  } catch (e) {
    console.error(e);
    return null;
  } finally {
    redirect("/loading");
  }
}

export async function deleteExamples() {
  "use server";
  console.log("deleteExamples");
  try {
    const res = await prisma.example.deleteMany();
    return res;
  } catch (e) {
    console.error(e);
    return null;
  } finally {
    redirect("/loading");
  }
}
