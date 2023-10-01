import { Avatar } from "@/components/Avatar/Avatar";
import type { Props } from "./postHeader.types";
import { Tag } from "../Tag/Tag";

const PostHeader: React.FC<Props> = ({ title, date, author }) => {
  return (
    <header className="flex flex-col gap-8">
      <h1 className=" text-4xl font-light tracking-wide">{title}</h1>
      <div className="flex flex-row items-end justify-between">
        <Avatar name={author} showAuthorTag />
        {date && (
          <div>
            <Tag text="published at" />
            <p>
              {new Date(date).toLocaleDateString("en-US", {
                weekday: "short",
                year: "numeric",
                month: "short",
                day: "numeric",
              })}
            </p>
          </div>
        )}
      </div>
    </header>
  );
};

export { PostHeader };
