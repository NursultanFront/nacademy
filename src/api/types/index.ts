type Info = {
  count: number;
  next: string | null;
  pages: number;
  prev: string | null;
};

export type List<T> = {
  results: T[];
  info: Info;
};
