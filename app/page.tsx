import { PostsList } from "@/components/PostList/PostList";

export default async function Home() {
  return (
    <article className="mx-auto flex max-w-screen-md flex-col justify-center gap-8 p-8">
      <h1 className="text-4xl font-bold">Hi, this is rezonmain&apos;s blog</h1>
      <h2 className="text-2xl font-semibold">Latest posts</h2>
      <PostsList />
    </article>
  );
}
