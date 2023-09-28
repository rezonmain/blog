import { en } from "@/constants/en";

const t = (key: keyof typeof en) => {
  if (!en[key]) {
    console.warn("[t] Translation not found for key: ", key);
    return key;
  }
  return en[key];
};

export { t };
