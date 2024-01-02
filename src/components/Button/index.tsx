"use client";

import { deleteExamples } from "@@/lib/server";

const cx = "p-2 rounded border cursor-pointer";

export const DeleteExamplesButton = ({ hidden }: { hidden?: boolean }) => (
  <form action={deleteExamples} className='text-center'>
    <button type='submit' className={cx + (hidden && " hidden")}>
      Delete Examples
    </button>
  </form>
);
