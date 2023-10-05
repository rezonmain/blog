import type { MDXComponents } from "mdx/types";
import { FiExternalLink } from "react-icons/fi";
import { PostHeader } from "@/components/PostHeader/PostHeader";
import { Strings } from "@/helpers/Strings.helpers";
import { Figure } from "@/components/Figure/Figure";
import { Spacer } from "@/components/Spacer/Spacer";
import { Spoiler } from "@/components/Spoiler/Spoiler";
import { BarChart } from "@/components/BarChart/BarChart";
import { LineChart } from "@/components/LineChart/LineChart";
import { Table } from "@/components/Table/Table";

/**
 * Borrowed,
 * see https://nextjs.org/docs/app/building-your-application/configuring/mdx#getting-started
 */
export function useMDXComponents(components: MDXComponents): MDXComponents {
  return {
    ...components,
    hr: (props) => <hr {...props} className="my-8 border-zinc-600" />,
    a: (props) => (
      <a
        {...props}
        className="inline-flex items-center gap-0.5 underline"
        target={props.href?.startsWith("https://") ? "_blank" : "_self"}
        rel="noreferrer"
      >
        {props.children}
        {props.href?.startsWith("https://") && (
          <FiExternalLink className="inline" />
        )}
      </a>
    ),
    p: (props) => <p {...props} className="pb-8 text-lg" />,
    h2: (props) => (
      <>
        <h2
          id={Strings.strToKebab(props.children?.toString() ?? "")}
          {...props}
          className="rounded-sm bg-zinc-400 pb-1.5 pl-1 text-3xl font-light text-zinc-950"
        />
        <Spacer size="pb-2" />
      </>
    ),
    h3: (props) => (
      <>
        <h3
          {...props}
          className="rounded-sm border border-l-0 border-r-0 border-t-0 border-b-zinc-400 pb-1.5 pl-1 text-2xl font-light"
        />
        <Spacer size="pb-2" />
      </>
    ),
    code: (props) => (
      <div className="p-2">
        <code
          {...props}
          className="overflow-x-scroll rounded-md bg-zinc-900 p-4 font-mono text-sm"
        />
      </div>
    ),
    blockquote: (props) => (
      <div className="flex flex-row justify-start pb-8">
        <div className="bg-zinc-400 pl-2"></div>
        <blockquote
          {...props}
          className="rounded-md bg-zinc-900 p-4 pl-4 text-lg font-light tracking-wide [&>ol]:pb-0 [&>p]:pb-0 [&>ul]:pb-0"
        />
      </div>
    ),
    ul: (props) => (
      <ul
        {...props}
        className="flex list-inside list-disc flex-col gap-2 pb-8 text-lg"
      />
    ),
    strong: (props) => <strong {...props} className="font-bold" />,
    PostHeader: PostHeader,
    Figure: Figure,
    Spoiler: Spoiler,
    table: (props) => (
      <div className="overflow-x-auto">
        <table {...props} className="border" />
        <Spacer size="pb-8" />
      </div>
    ),
    BarChart: (props) => <BarChart {...props} />,
    LineChart: (props) => <LineChart {...props} />,
    Table: Table,
  };
}
