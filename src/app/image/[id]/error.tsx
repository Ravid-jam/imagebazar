"use client";
import React from "react";

export default function ProductError({
  error,
  reset,
}: {
  error: Error;
  reset: () => void;
}) {
  return (
    <div>
      {error.message} <button onClick={reset}>reload</button>
    </div>
  );
}
