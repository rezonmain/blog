import "./globals.css";
import type { Metadata } from "next";
import { Exo_2 } from "next/font/google";
import { Header } from "@/components/Header/Header";
import { Footer } from "@/components/Footer/Footer";

const exo2 = Exo_2({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "home",
  description: "rezonmain's blog",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={exo2.className + " pb-8"}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
