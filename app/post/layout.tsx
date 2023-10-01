export default function PostLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <main className="flex-row md:flex">
      <article className="col-span-4 mx-auto max-w-screen-md border border-b-0 border-t-0 border-zinc-800 p-4">
        {children}
      </article>
      <aside className="hidden w-1/4 md:block"></aside>
    </main>
  );
}
