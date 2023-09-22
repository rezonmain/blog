export default function PostLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <section>
      <article>{children}</article>
    </section>
  );
}
