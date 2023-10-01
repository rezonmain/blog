import type { ComponentPropsWithRef } from "react";

const ExternalLink: React.FC<ComponentPropsWithRef<"a">> = ({ ...props }) => {
  return (
    <>
      <a
        {...props}
        target="_blank"
        rel="noopener noreferrer"
        className="text-underline"
      >
        {props.children}
      </a>
    </>
  );
};

export { ExternalLink };
