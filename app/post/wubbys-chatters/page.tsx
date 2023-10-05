import type { Metadata } from "next";
import WubbysChatters, { meta } from "./wubbys-chatters.mdx";
import { Wip } from "@/components/Wip/Wip";

export const metadata: Metadata = {
  ...meta,
};

export default function Page() {
  return (
    <>
      <Wip />
      <WubbysChatters />
    </>
  );
}
