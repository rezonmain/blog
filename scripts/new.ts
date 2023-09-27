import inquirer from "inquirer";
import type { PostMeta } from "@/repository/post/post.types";
import { PostsHelper } from "@/helpers/Posts.helpers";

const shouldAskAll = process.argv[2] === "--ask";

const DEFAULTS: PostMeta = {
  name: "new-post",
  title: "post title",
  author: "rezonmain",
  description: "Super cool post",
};

const questions = (
  shouldAskAll ? Object.keys(DEFAULTS) : ["name", "title"]
).map((key) => ({
  type: "input",
  name: key,
  message: `Post ${key}?`,
  default: DEFAULTS[key as keyof PostMeta],
}));

const postHelper = new PostsHelper();

(async () => {
  const answers = await inquirer.prompt<PostMeta>(questions);
  postHelper.createPost(answers);
})();
