<script lang="ts">
  import SearchCard from "../components/main/SearchCard.svelte";
  import { SearchViewState } from "../domains/states";
  import SearchResultsView from "../components/main/SearchResultsView.svelte";
  import { repositories } from "../stores/repositories";
  import { of } from "await-of";
  import ky from "ky";

  const mode = process.env.NODE_ENV;
  const dev = mode === "development";

  const server = dev
    ? "http://127.0.0.1:8787"
    : "https://domainer-api.domainer-api.workers.dev";

  let state: SearchViewState = SearchViewState.initial;

  async function fetchRepos(username: string) {
    state = SearchViewState.loading;

    const [response, error] = await of(
      ky.get(`${server}/api/projects/${username.trim()}`).json()
    );

    if (error) {
      repositories.set({ data: error.message });
      state = SearchViewState.error;
      return;
    }

    state = SearchViewState.loaded;
    repositories.set({ data: { username, ...response } });
  }
</script>

<svelte:head>
  <title>Main | Domainer</title>
</svelte:head>

<article>
  <SearchCard
    loading={state === SearchViewState.loading}
    onSubmit={fetchRepos}
  />
  <SearchResultsView {state} />
</article>

<style lang="postcss">
</style>
