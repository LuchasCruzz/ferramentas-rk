'use client';

import * as React from 'react';

export default function Error({error, reset}: {error: Error; reset: () => void}) {
  return (
    <div className="parchment rounded-3xl p-6">
      <h1 className="text-2xl font-black">Oops</h1>
      <p className="mt-2 text-sm text-black/75">Something went wrong.</p>
      <pre className="mt-3 overflow-auto rounded-2xl border border-black/10 bg-white/30 p-3 text-xs text-black/70">
        {error.message}
      </pre>
      <button
        onClick={() => reset()}
        className="mt-4 rounded-full border border-black/15 bg-white/40 px-4 py-2 text-sm font-semibold hover:bg-black/5"
      >
        Try again
      </button>
    </div>
  );
}
