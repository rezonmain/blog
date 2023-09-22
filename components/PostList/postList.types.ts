type PostListTypes = "latest" | "featured" | "all";

interface Props {
  listType?: PostListTypes;
}

export type { Props, PostListTypes };
