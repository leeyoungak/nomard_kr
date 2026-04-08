"use client";

import { useState } from "react";
import JoinModal from "./JoinModal";

export default function JoinModalTrigger({
  children,
}: {
  children: React.ReactNode;
}) {
  const [open, setOpen] = useState(false);

  return (
    <>
      <span onClick={() => setOpen(true)} className="cursor-pointer">
        {children}
      </span>
      <JoinModal open={open} onClose={() => setOpen(false)} />
    </>
  );
}
