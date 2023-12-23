"use client";

import { useFormStatus } from "react-dom";


export default function SubmitFormBtn() {
  // declaration..
  let { pending } = useFormStatus();
  return (
    <button disabled={pending}>
      {pending ? "Submitting..." : "Share Meal"}
    </button>
  );
}
