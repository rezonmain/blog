import type { MDXComponents } from "mdx/types";
import { FiExternalLink } from "react-icons/fi";
import { PostHeader } from "@/components/PostHeader/PostHeader";

/**
 * Borrowed,
 * see https://nextjs.org/docs/app/building-your-application/configuring/mdx#getting-started
 */
export function useMDXComponents(components: MDXComponents): MDXComponents {
  return {
    ...components,
    hr: (props) => <hr {...props} className="my-4 border-zinc-600" />,
    a: (props) => (
      <a {...props} className="inline-flex items-center gap-0.5 underline">
        {props.children}
        <FiExternalLink className="inline" />
      </a>
    ),
    p: (props) => <p {...props} className="mb-4 text-lg" />,
    PostHeader: PostHeader,
  };
}
