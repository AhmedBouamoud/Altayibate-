"use client";

import Link from "next/link";
import { useEffect } from "react";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50">
      <div className="text-center max-w-md mx-auto px-4">
        <div className="text-6xl mb-4">⚠️</div>
        <h2 className="text-2xl font-bold text-gray-900 mb-3">حدث خطأ ما</h2>
        <p className="text-gray-500 mb-6">{error.message}</p>
        <div className="flex gap-3 justify-center">
          <button onClick={reset} className="btn-primary">
            حاول مجدداً
          </button>
          <Link href="/" className="btn-secondary">
            الرئيسية
          </Link>
        </div>
      </div>
    </div>
  );
}
