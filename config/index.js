import process from "process";

let URL =
  process.env.NODE_ENV === "production"
    ? process.env.NEXT_PUBLIC_URL_DEV
    : process.env.NEXT_PUBLIC_URL_DEV;

export { URL };
