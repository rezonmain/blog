import type { Metadata } from "next";
import { Wip } from "@/components/Wip/Wip";
import WubbysChatters, { meta } from "./wubbys-chatters.mdx";

export const metadata: Metadata = {
  ...meta,
};

export default function Page() {
  return (
    <>
      <Wip />
      <WubbysChatters />;
    </>
  );
}
