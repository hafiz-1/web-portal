"use client";

import { useEffect, useState } from "react";

type SearchOverlayProps = {
  open: boolean;
  onClose: () => void;
};

export default function SearchOverlay({ open, onClose }: SearchOverlayProps) {
  const [query, setQuery] = useState("");

  useEffect(() => {
    if (!open) return;

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") onClose();
    };

    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, [open, onClose]);

  if (!open) return null;

  return (
    <div
      className="fixed inset-0 z-[60] bg-black/50 px-6 py-24"
      onClick={onClose}
      role="presentation"
    >
      <div
        className="mx-auto max-w-2xl rounded-2xl bg-white p-6 shadow-2xl"
        onClick={(event) => event.stopPropagation()}
        role="dialog"
        aria-modal="true"
        aria-label="Search"
      >
        <div className="flex items-center gap-4">
          <input
            autoFocus
            value={query}
            onChange={(event) => setQuery(event.target.value)}
            placeholder="Search"
            className="min-w-0 flex-1 border-b border-gray-300 py-3 text-lg outline-none focus:border-black"
          />
          <button className="button-motion" type="button" onClick={onClose} aria-label="Close search">
            Close
          </button>
        </div>
        {query && (
          <p className="mt-6 text-sm text-gray-500">
            Search results for &quot;{query}&quot;
          </p>
        )}
      </div>
    </div>
  );
}