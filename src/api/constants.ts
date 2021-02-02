export const URLS = {
  BASE: "http://ideadeploy.space/test/",
  AUTH: "login.json",
  GRAPH: "graph.json",
  DONUT: "donut.json",
} as const;

export type URLTypes = typeof URLS;
