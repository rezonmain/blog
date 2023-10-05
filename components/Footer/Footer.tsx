import Link from "next/link";

const Footer: React.FC = () => (
  <footer className="mt-16 flex w-full flex-col items-center text-center">
    <small className="text-sm">
      &copy; {new Date().getFullYear()} made with 💝 by rezonmain
    </small>
    <div className="flex flex-row items-center gap-2">
      <small className="text-sm">
        <a
          target="_blank"
          rel="noreferrer"
          href="https://github.com/rezonmain/blog"
          className="hover:underline"
        >
          github
        </a>
      </small>
      <span>|</span>
      <Link href="/support" className="text-sm hover:underline">
        support
      </Link>
    </div>
  </footer>
);

export { Footer };
