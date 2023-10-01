import type { MDXComponents } from "mdx/types";
import { FiExternalLink } from "react-icons/fi";
import { PostHeader } from "@/components/PostHeader/PostHeader";
import { Strings } from "./helpers/Strings.helpers";

/**
 * Borrowed,
 * see https://nextjs.org/docs/app/building-your-application/configuring/mdx#getting-started
 */
export function useMDXComponents(components: MDXComponents): MDXComponents {
  return {
    ...components,
    hr: (props) => <hr {...props} className="my-8 border-zinc-600" />,
    a: (props) => (
      <a {...props} className="inline-flex items-center gap-0.5 underline">
        {props.children}
        {props.href?.startsWith("https://") && (
          <FiExternalLink className="inline" />
        )}
      </a>
    ),
    p: (props) => <p {...props} className="pb-8 text-lg" />,
    h2: (props) => (
      <h2
        id={Strings.strToKebab(props.children?.toString() ?? "")}
        {...props}
        className="rounded-sm bg-zinc-400 pb-1.5 pl-1 text-3xl font-light text-zinc-950"
      />
    ),
    h3: (props) => (
      <h3 {...props} className="rounded-sm pb-1.5 pl-1 text-xl font-light" />
    ),
    PostHeader: PostHeader,
  };
}
