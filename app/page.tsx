import { PostsList } from "@/components/PostList/PostList";

export default async function Home() {
  return (
    <>
      <h1>Welcome to my blog</h1>
      <h2>Posts:</h2>
      <PostsList />
    </>
  );
}
