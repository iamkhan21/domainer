import { writable } from "svelte/store";

export const repositories = writable<{ data: any }>({
  data: null,
});
