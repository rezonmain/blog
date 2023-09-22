import type { Props } from "./postList.types";
import { listTypePostsGetters } from "./postList.constants";
import Link from "next/link";

const PostsList: React.FC<Props> = async ({ listType = "all" }) => {
  const posts = await listTypePostsGetters[listType]();

  return (
    <ul>
      {posts.map(({ title, href, name }) => (
        <li key={name}>
          <Link href={href}>
            <h4>{title}</h4>
          </Link>
        </li>
      ))}
    </ul>
  );
};

export { PostsList };
