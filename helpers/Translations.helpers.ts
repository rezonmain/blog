import { en } from "@/constants/en";

const t = (key: keyof typeof en) => {
  return en[key] ?? key;
};

export { t };
