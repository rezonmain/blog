import { ExternalLinks } from "@/constants/routes.constants";
import type { Metadata } from "next";
import Ashallah from "./assets/ashallah.webp";
import Cheetah from "./assets/cheetah.webp";
import Image from "next/image";

export const metadata: Metadata = {
  title: "support",
  description: "hey thanks for supporting rezonmain 💝",
};

export default function Page() {
  return (
    <article className="mx-auto flex flex-col items-center justify-center gap-8 p-8">
      <h1 className=" text-3xl font-light">Support</h1>
      <p className=" max-w-[40ch] text-lg">
        If you find what I do of value, considering supporting, donations go
        towards helping feed my two cats, Cheetah, and Ashalláh.
      </p>
      <a
        href={ExternalLinks.support}
        target="_blank"
        rel="noopener noreferrer"
        className="rounded-md border border-zinc-50 p-4 text-lg uppercase"
      >
        Donate
      </a>
      <div className="flex flex-row gap-4">
        <div className="flex flex-col justify-center">
          <Image
            src={Cheetah}
            alt="Cheetah being so cute"
            width="200"
            height="200"
            className=" rounded-2xl"
          />
          <p>Cheetah</p>
        </div>

        <div className="flex flex-col justify-center">
          <Image
            src={Ashallah}
            alt="Ashallah being the cutest girl"
            width="200"
            height="200"
            className=" rounded-2xl"
          />
          <p>Ashalláh</p>
        </div>
      </div>
    </article>
  );
}
