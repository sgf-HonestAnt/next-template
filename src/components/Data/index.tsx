"use client";
import * as React from "react";
import { Example } from "@prisma/client";
import { FaDeleteLeft, FaSpinner } from "react-icons/fa6";
import { createExample } from "@@/serverfunctions/createExample";
import { deleteExample } from "@@/lib/server/functions/deleteExample";
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
      <div className='text-center'>
        Found {examples?.length ?? 0} example{examples?.length === 1 ? "" : "s"}{" "}
        in db
      </div>
      {examples?.map((d) => (
        <div key={d.id} className='flex gap-1 justify-center align-middle'>
          {d.email} {d.name}
          <form action={deleteExample}>
            <input type='hidden' name='id' value={d.id} />
            <button type='submit' title={"Delete " + d.name}>
              <FaDeleteLeft />
            </button>
          </form>
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
    </div>
  );
};
