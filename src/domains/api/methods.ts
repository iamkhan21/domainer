import ky from "ky";

export const get = (url: string) => ky.get(url).json();

// `${server}/api/projects/${username}/${endCursor}`
