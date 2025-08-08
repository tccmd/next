"use client";

export default function GlobalError({ error, reset }) {
  return (
    <html lang="ko">
      <body>
        <h1>오류 발생</h1>
        <p>죄송합니다. 오류가 발생했습니다.</p>
        <p>{error.message}</p>
        <button onClick={() => reset()}>다시 시도</button>
      </body>
    </html>
  );
}