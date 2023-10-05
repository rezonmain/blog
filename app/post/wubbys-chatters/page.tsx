import type { Metadata } from "next";
import WubbysChatters, { meta } from "./wubbys-chatters.mdx";

export const metadata: Metadata = {
  ...meta,
};

export default function Page() {
  return <WubbysChatters />;
}
