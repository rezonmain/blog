import type { Props } from "./tag.types";

const Tag: React.FC<Props> = ({ text }) => {
  return (
    <span className="flex w-fit items-center justify-center rounded-sm bg-zinc-400 p-0.5 px-1.5 text-center text-xs font-bold tracking-wider text-zinc-950">
      {text}
    </span>
  );
};

export { Tag };
