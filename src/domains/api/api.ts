import { get } from "./methods";
import { API } from "./urls";
import { of } from "await-of";

export const fetchUserPublicRepos = (username: string, from: string = "") =>
  of(get(`${API.GET_REPOS}/${username}/${from}`));
