export type Dict<T = unknown> = Record<string, T>;

export type AnyFunction = (...args: any[]) => any;

export type Optional<T extends object> = { [Properties in T as string]?: any };
