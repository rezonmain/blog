import type { PostMeta } from "./post.types";

interface PostResponseDto extends PostMeta {
  href: string;
}

export type { PostResponseDto };
