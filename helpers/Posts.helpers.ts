import type { PostMeta } from "@/repository/post/post.types";
import { FileHelper } from "./File.helpers";
import type { PostResponseDto } from "@/repository/post/post.dto";
import { Strings } from "./Strings.helpers";

class PostsHelper {
  POSTS_PATH = "./app/post";
  IGNORED_FILE_NAMES = ["layout.tsx"];
  POST_FILE_EXTENSION = "mdx";
  POST_HREF_PREFIX = "/post";

  private parsePostMeta = (postContent: string): PostMeta => {
    const START = "export const meta = { ";
    const END = "}";
    const keyPair = postContent
      .substring(
        postContent.indexOf(START) + START.length,
        postContent.indexOf(END) + END.length - 1,
      )
      .trim();
    const keyPairCommaRemoved = keyPair.substring(0, keyPair.length - 1);
    return keyPairCommaRemoved.split(",").reduce((acc, curr) => {
      const [key, value] = curr.split(":").map((s) => s.trim());
      return { ...acc, [key]: value.replaceAll('"', "") };
    }, {}) as PostMeta;
  };

  private getPostMeta = async (postPath: string): Promise<PostMeta> => {
    const fileContents = await FileHelper.read(this.toFilePath(postPath));
    return this.parsePostMeta(fileContents);
  };

  private toFilePath = (postName: string): string =>
    `${this.POSTS_PATH}/${postName}/${postName}.${this.POST_FILE_EXTENSION}`;

  private getPostNames = async (): Promise<string[]> =>
    await FileHelper.ls(this.POSTS_PATH, this.IGNORED_FILE_NAMES);

  private getNewPostPageContent = ({ name }: PostMeta) => {
    const camelName = Strings.kebabToPascal(name);
    return `import ${camelName} from "./${name}.mdx";

export default function Page() {
  return <${camelName} />;
}
`;
  };
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
    for (const postName of postFolderNames) {
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

  async createPost(postMeta: PostMeta) {
    const postPath = this.toFilePath(postMeta.name);
    const postContent = `export const meta = ${JSON.stringify(
      postMeta,
      null,
      2,
    )};\n\n# ${postMeta.title}`;

    // Create directory
    await FileHelper.mkdir(`${this.POSTS_PATH}/${postMeta.name}`);

    // Write .mdx file
    await FileHelper.write(postPath, postContent);

    // Write page.tsx file
    await FileHelper.write(
      `${this.POSTS_PATH}/${postMeta.name}/page.tsx`,
      this.getNewPostPageContent(postMeta),
    );
  }
}

export { PostsHelper };
