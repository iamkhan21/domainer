const mode = process.env.NODE_ENV;
const dev = mode === "development";

const server = dev
  ? "http://127.0.0.1:8787"
  : "https://domainer-api.domainer-api.workers.dev";

export const API = {
  GET_REPOS: `${server}/api/projects`,
};
