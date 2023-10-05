const Footer: React.FC = () => (
  <footer className="mt-16 flex w-full flex-col items-center text-center">
    <small className="format text-sm">
      &copy; {new Date().getFullYear()} made with 💝 by rezonmain
    </small>
    <small className="format text-sm">
      <a
        target="_blank"
        rel="noreferrer"
        href="https://github.com/rezonmain/blog"
        className="hover:underline"
      >
        github
      </a>
    </small>
  </footer>
);

export { Footer };
