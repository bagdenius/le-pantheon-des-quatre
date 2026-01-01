'use client';

export default function Error({
  error,
  reset,
}: {
  error: Error;
  reset: () => void;
}) {
  return (
    // TODO: Style that
    <main>
      <h1>Something went wrong!</h1>
      <p>{error.message}</p>
      <button onClick={reset}>Try again</button>
    </main>
  );
}
