import type { PostMeta } from "@/repository/post/post.types";
import { FileHelper } from "./File.helpers";
import type { PostResponseDto } from "@/repository/post/post.dto";

class PostsHelper {
  POSTS_PATH = "./app/post";
  IGNORED_FILES = ["layout.tsx"];
  POST_FILE_EXTENSION = "mdx";
  POST_HREF_PREFIX = "/post";

  private getPostMeta = async (postPath: string): Promise<PostMeta> => {
    // ../app/post needs to be hardcoded in order to resolve after the build step
    const meta = (await import(`../app/post/${postPath}/${postPath}.mdx`)).meta;
    if (!meta)
      throw new Error(
        `[getPostMeta] Post ${postPath} has no exported object meta`,
      );
    return meta;
  };

  private toFilePath = (postName: string): string =>
    `${this.POSTS_PATH}/${postName}/${postName}.${this.POST_FILE_EXTENSION}`;

  getPostNames = async (): Promise<string[]> =>
    await FileHelper.ls(this.POSTS_PATH, this.IGNORED_FILES);

  /**
   * Throws if a post .mdx file does not match
   * its folder name.
   * Example:
   *
   * app
   * └── post
   * └── test-post         <── must match
   *     └── test-post.mdx <── must match
   */
  validateFileNames = async (postNames?: string[]) => {
    const postFolderNames = postNames ?? (await this.getPostNames());
    for (const postName in postFolderNames) {
      const postPath = this.toFilePath(postName);

      const exists = await FileHelper.exists(postPath);

      if (exists) continue;

      throw new Error(
        `[validateFileNames] Post file ${postPath} does not exist or it does not match its folder name.`,
      );
    }
  };

  postMetasToDto = (postsMetas: PostMeta[]): PostResponseDto[] =>
    postsMetas.map((postMeta) => ({
      href: `${this.POST_HREF_PREFIX}/${postMeta.name}`,
      ...postMeta,
    }));

  async getAllPosts(): Promise<PostMeta[]> {
    const postsNames = await this.getPostNames();
    this.validateFileNames(postsNames);

    return await Promise.all(postsNames.map(this.getPostMeta));
  }
}

export { PostsHelper };
