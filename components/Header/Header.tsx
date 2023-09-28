import Link from "next/link";
import { FiSearch } from "react-icons/fi";
import { Routes } from "@/constants/routes.constants";
import { t } from "@/helpers/Translations.helpers";

const Header: React.FC = async () => {
  return (
    <header className="border-b border-l-0 border-r-0 border-t-0 border-b-zinc-800">
      <nav className="mx-auto flex flex-row items-center justify-between p-4 md:p-6 xl:max-w-screen-xl">
        <Link className="text-xl md:text-2xl" href={Routes.home}>
          {t("blog")}
        </Link>
        <FiSearch className="text-xl md:text-2xl" />
      </nav>
    </header>
  );
};

export { Header };
