import { Dict } from "./types";

export function pick<T extends Dict, K extends keyof T>(object: T, keys: K[]) {
  const result = {} as { [P in K]: T[P] };

  keys.forEach((key) => {
    if (key in object) {
      result[key] = object[key];
    }
  });

  return result;
}

export const objectKeys = <T extends Dict>(obj: T) =>
  Object.keys(obj) as unknown as (keyof T)[];

export function omit<T extends Dict, K extends keyof T>(object: T, keys: K[]) {
  const result: Dict = {};

  Object.keys(object).forEach((key) => {
    if (keys.includes(key as K)) return;
    result[key] = object[key];
  });

  return result as Omit<T, K>;
}
