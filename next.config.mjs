import rehypePrettyCode from "rehype-pretty-code";
import createMdx from "@next/mdx";

/** @type {import('rehype-pretty-code').Options} */
const options = { keepBackground: false, defaultLang: "js" };

const withMDX = createMdx({
  extension: /\.mdx?$/,
  options: {
    remarkPlugins: [],
    rehypePlugins: [[rehypePrettyCode, options]],
  },
});

export default withMDX;
