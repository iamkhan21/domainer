<script lang="ts">
  import SearchCard from "../components/main/SearchCard.svelte";
  import { SearchViewState } from "../domains/states";
  import SearchResultsView from "../components/main/SearchResultsView.svelte";
  import { repositories } from "../stores/repositories";
  import { get } from "svelte/store";
  import { fetchUserPublicRepos } from "../domains/api";

  let state: SearchViewState = SearchViewState.initial;

  async function loadMore({ detail: { loaded, complete, error } }) {
    const {
      data: {
        username,
        pageInfo: { endCursor },
      },
    } = get(repositories);

    const [response, err] = await fetchUserPublicRepos(username, endCursor);

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
    const curUsername = username.trim();

    state = SearchViewState.loading;

    const [response, error] = await fetchUserPublicRepos(curUsername);

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
