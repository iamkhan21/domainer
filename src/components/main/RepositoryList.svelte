<script lang="ts">
  import { repositories } from "../../stores/repositories";
  import RepositoryCard from "./RepositoryCard.svelte";
  import InfiniteLoading from "svelte-infinite-loading";

  let username = "";
  let repos = [];
  let loadMore = () => {};

  repositories.subscribe((value) => {
    ({ username, repositories: repos, loadMore } = value.data);
  });
</script>

{#if repos.length}
  {#each repos as repo (repo.id)}
    <RepositoryCard {repo} />
  {/each}
  <InfiniteLoading on:infinite={loadMore} />
{:else}
  <h3>Nothing..</h3>
  <p>Can't find any public repositories from {username}</p>
{/if}
