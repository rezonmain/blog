import Image from "next/image";
import type { Props } from "./figure.types";

const Figure: React.FC<Props> = ({ src, caption }) => {
  return (
    <figure>
      <Image src={src} alt={caption} width="100" height="100" />
      <figcaption>{caption}</figcaption>
    </figure>
  );
};

export { Figure };
