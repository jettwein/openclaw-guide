"use client";

import { useSearchParams } from "next/navigation";
import { Suspense } from "react";

function SuccessContent() {
  const searchParams = useSearchParams();
  const sessionId = searchParams.get("session_id");

  return (
    <div className="min-h-screen font-mono flex items-center justify-center px-6">
      <div className="max-w-xl text-center">
        <p className="text-5xl mb-6">🎉</p>
        <h1 className="text-3xl font-bold">You're in.</h1>
        <p className="mt-4 text-gray-400 leading-relaxed">
          Thanks for grabbing The OpenClaw Guide. You just saved yourself
          3 hours of Googling and Discord searching.
        </p>

        <div className="mt-10 space-y-4">
          <a
            href="/guide"
            className="block bg-white text-gray-950 px-8 py-3 text-sm font-bold hover:bg-gray-200 transition"
          >
            Read the Guide Online →
          </a>
          <a
            href={`/api/generate-pdf?token=${process.env.NEXT_PUBLIC_GUIDE_DOWNLOAD_TOKEN}`}
            className="block border border-gray-700 px-8 py-3 text-sm font-bold text-gray-300 hover:border-gray-500 transition"
          >
            Download PDF
          </a>
        </div>

        <p className="mt-10 text-xs text-gray-700">
          Questions? Email us at the.open.claw.guide@gmail.com
        </p>
      </div>
    </div>
  );
}

export default function SuccessPage() {
  return (
    <Suspense fallback={<div className="min-h-screen font-mono flex items-center justify-center"><p className="text-gray-500">Loading...</p></div>}>
      <SuccessContent />
    </Suspense>
  );
}
