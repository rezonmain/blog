interface PostMeta {
  name: string;
  title: string;
  description: string;
  author: string;
  publishedAt?: string; // ISO 8601 string
  version?: string;
}

export type { PostMeta };
