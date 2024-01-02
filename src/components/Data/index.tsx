"use client";
import * as React from "react";
import { Example } from "@@/lib/prisma/client";
import { createExample, deleteExamples } from "@@/lib/server";
import { FaSpinner } from "react-icons/fa6";
import * as z from "zod";

type Error = {
  path: string;
  message: string;
};

export const Data = ({ examples }: { examples: Example[] | undefined }) => {
  const [form, setForm] = React.useState({
    name: "",
    email: "",
  });

  const [errors, setErrors] = React.useState<Error[]>([]);
  const [validating, setValidating] = React.useState(false);

  const schema = z.object({
    name: z.string().max(10),
    email: z.string().email(),
  });

  function validateForm() {
    setValidating(true);
    const validation = schema.safeParse(form);

    // @ts-expect-error
    if (validation.error) {
      console.log("ERROR(S) FOUND");
      let errormessages: Error[] = [];
      // @ts-expect-error
      for (const err of validation.error.issues) {
        errormessages.push({
          path: `${err.path[0]}`,
          message: err.message,
        });
      }
      setErrors(errormessages);
    } else {
      setErrors([]);
    }
    setValidating(false);
  }

  function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
    setForm({ ...form, [e.target.name]: e.target.value });
    validateForm();
  }

  return (
    <div className='flex flex-col gap-5'>
      {examples?.map((d) => (
        <div key={d.id}>
          {d.email} {d.name}
        </div>
      ))}
      <form
        action={createExample}
        className='w-64 py-3 flex flex-col align-middle gap-1'>
        <input
          type='text'
          name='name'
          placeholder='name'
          className='text-black p-2 rounded border'
          onChange={handleChange}
        />
        {errors.map(
          (err, idx) =>
            err.path === "name" && (
              <div className='p-1 bg-slate-900 text-red-500' key={idx}>
                {err.message}
              </div>
            )
        )}
        <input
          type='text'
          name='email'
          placeholder='email'
          className='text-black p-2 rounded border'
          onChange={handleChange}
        />
        {errors.map(
          (err, idx) =>
            err.path === "email" && (
              <div className='p-1 bg-slate-900 text-red-500' key={idx}>
                {err.message}
              </div>
            )
        )}
        <button type='submit' className='p-2 rounded border cursor-pointer'>
          Create Examples{" "}
          {validating && <FaSpinner className='text-white animate-spin' />}
        </button>
      </form>
      <form action={deleteExamples} className='text-center'>
        <button type='submit' className='p-2 rounded border cursor-pointer'>
          Delete Examples
        </button>
      </form>{" "}
    </div>
  );
};
