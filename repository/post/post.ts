import { PostsHelper } from "@/helpers/Posts.helpers";
import type { PostResponseDto } from "./post.dto";

const getPosts = async (): Promise<PostResponseDto[]> => {
  const postHelper = new PostsHelper();
  const postsMetas = await postHelper.getAllPosts();
  return postHelper.postMetasToDto(postsMetas);
};

const getLatestPosts = async (limit = 3): Promise<PostResponseDto[]> =>
  await getPosts().then((posts) => posts.slice(0, limit));

const getFeaturedPosts = async (): Promise<PostResponseDto[]> => {
  const FEATURED_POSTS_NAMES = ["test-post"];
  const postHelper = new PostsHelper();
  const postsMetas = await postHelper.getAllPosts();
  return postHelper.postMetasToDto(
    postsMetas.filter((postMeta) =>
      FEATURED_POSTS_NAMES.includes(postMeta.name),
    ),
  );
};

export { getPosts, getLatestPosts, getFeaturedPosts };
