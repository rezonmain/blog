import type { Props } from "./postList.types";
import { listTypePostsGetters } from "./postList.constants";
import Link from "next/link";

const PostsList: React.FC<Props> = async ({ listType = "all" }) => {
  const posts = await listTypePostsGetters[listType]();

  return (
    <ul className="list-disc rounded-md bg-zinc-900 p-8">
      {posts.map(({ title, href, name, description }) => (
        <li key={name} className="cursor-pointer p-4 hover:bg-zinc-800">
          <Link href={href} className="inline">
            <h3 className="text-xl font-semibold">{title}</h3>
            <h4 className=" text-zinc-200">{description}</h4>
          </Link>
        </li>
      ))}
    </ul>
  );
};

export { PostsList };
