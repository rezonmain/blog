import Image from "next/image";
import type { Props } from "./avatar.types";
import { getInitials } from "./avatar.helpers";
import { Tag } from "../Tag/Tag";

const Avatar: React.FC<Props> = ({ imgSrc, name, showAuthorTag = false }) => {
  return (
    <div className="flex w-fit items-center justify-between gap-3">
      <div className="flex aspect-square h-12 items-center justify-center rounded-full border-2 border-zinc-50 text-xl leading-none">
        {imgSrc ? (
          <Image src={imgSrc} alt={name} />
        ) : (
          <span>{getInitials(name)}</span>
        )}
      </div>
      <div className="flex flex-col">
        {showAuthorTag && <Tag text="author" />}
        <span className="text-xl leading-none">{name}</span>
      </div>
    </div>
  );
};

export { Avatar };
