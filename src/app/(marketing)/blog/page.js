import Link from "next/link";

function generateStaticParams() {}
 
export default function Page() {
  return (
    <>
      <h1>Hello, Blog Post Page!</h1>
      {Array.from({ length: 10 }, (_, i) => (
        <span key={i}>
          <Link href={`/blog/${i + 1}`}>[{i + 1}]</Link>
          {i < 9 ? ', ' : ''}
        </span>
      ))}
    </>
  );
} 