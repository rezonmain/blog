import type { Props } from "./spoiler.types";

const Spoiler: React.FC<Props> = ({
  children,
  caption = "hover to reveal",
}) => {
  return (
    <span className="group inline cursor-pointer rounded-sm bg-zinc-400 p-0.5 text-zinc-950 hover:bg-transparent hover:text-zinc-50">
      <span className="hidden group-hover:inline">{children}</span>
      <span className="group-hover:hidden">{caption}</span>
    </span>
  );
};

export { Spoiler };
