import rehypePrettyCode from "rehype-pretty-code";
import remarkGfm from "remark-gfm";
import createMdx from "@next/mdx";

/** @type {import('rehype-pretty-code').Options} */
const options = { keepBackground: false, defaultLang: "js" };

const withMDX = createMdx({
  extension: /\.mdx?$/,
  options: {
    remarkPlugins: [[remarkGfm]],
    rehypePlugins: [[rehypePrettyCode, options]],
  },
});

export default withMDX;
