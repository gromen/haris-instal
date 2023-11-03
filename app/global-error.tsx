'use client';

import { useEffect } from 'react';
import { useRouter } from 'next/router';

export default function GlobalError({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  const router = useRouter();
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <html>
      <body>
        <h2>Something went wrong!</h2>
        <button onClick={() => reset()}>Try again</button>
        <button onClick={() => router.push('/')}>Back to home</button>
      </body>
    </html>
  );
}
