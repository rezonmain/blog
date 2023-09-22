import {
  getPosts,
  getFeaturedPosts,
  getLatestPosts,
} from "@/repository/post/post";
import type { PostResponseDto } from "@/repository/post/post.dto";
import type { PostListTypes } from "./postList.types";

const listTypePostsGetters: Record<
  PostListTypes,
  () => Promise<PostResponseDto[]>
> = {
  all: getPosts,
  featured: getFeaturedPosts,
  latest: getLatestPosts,
};

export { listTypePostsGetters };
