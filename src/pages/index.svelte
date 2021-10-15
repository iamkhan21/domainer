<script lang="ts" context="module">
  const mode = process.env.NODE_ENV;
  const dev = mode === "development";

  const server = dev
    ? "http://127.0.0.1:8787"
    : "https://domainer-api.domainer-api.workers.dev";
</script>

<script lang="ts">
  import SearchCard from "../components/main/SearchCard.svelte";
  import { SearchViewState } from "../domains/states";
  import SearchResultsView from "../components/main/SearchResultsView.svelte";
  import { repositories } from "../stores/repositories";
  import { of } from "await-of";
  import ky from "ky";
  import { get } from "svelte/store";

  let state: SearchViewState = SearchViewState.initial;
  let curUsername = "";

  async function loadMore({ detail: { loaded, complete, error } }) {
    const {
      data: {
        username,
        pageInfo: { endCursor },
      },
    } = get(repositories);

    const [response, err] = await of(
      ky.get(`${server}/api/projects/${username}/${endCursor}`).json()
    );

    if (err) return error();

    repositories.update(({ data }) => ({
      data: {
        ...data,
        ...response,
        repositories: [...data.repositories, ...response.repositories],
      },
    }));

    response.pageInfo.hasNextPage ? loaded() : complete();
  }

  async function fetchRepos(username: string) {
    if (curUsername === username) {
      return;
    } else {
      curUsername = username.trim();
    }

    state = SearchViewState.loading;

    const [response, error] = await of(
      ky.get(`${server}/api/projects/${curUsername}`).json()
    );

    if (error) {
      repositories.set({ data: error.message });
      state = SearchViewState.error;
      return;
    }

    state = SearchViewState.loaded;
    repositories.set({
      data: { username: curUsername, ...response, loadMore },
    });
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
