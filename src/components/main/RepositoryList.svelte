<script lang="ts">
  import { get } from "svelte/store";
  import { repositories } from "../../stores/repositories";
  import RepositoryCard from "./RepositoryCard.svelte";

  const { data } = get(repositories);
</script>

{#each data.repositories as repo (repo.id)}
  <RepositoryCard {repo} />
{:else}
  <h3>Nothing..</h3>
  <p>Can't find any public repositories from {data.username}</p>
{/each}

<style lang="postcss">

</style>
