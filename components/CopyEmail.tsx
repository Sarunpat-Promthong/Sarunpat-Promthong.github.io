"use client";

import { useState } from "react";

// Copies the address so recruiters don't depend on a mail app being set up.
export function CopyEmail({ email, className = "" }: { email: string; className?: string }) {
  const [copied, setCopied] = useState(false);

  async function copy() {
    try {
      await navigator.clipboard.writeText(email);
      setCopied(true);
      setTimeout(() => setCopied(false), 1800);
    } catch {
      window.location.href = `mailto:${email}`;
    }
  }

  return (
    <button type="button" onClick={copy} className={className} aria-live="polite">
      {copied ? "Copied" : "Copy email"}
    </button>
  );
}
