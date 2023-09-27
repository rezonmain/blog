import Link from "next/link";

export default function PostLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <section>
      <header>
        <Link href="/">Home</Link>
      </header>
      <article>{children}</article>
    </section>
  );
}
