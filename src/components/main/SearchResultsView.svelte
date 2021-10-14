<script lang="ts">
  import { SearchViewState } from "../../domains/states";

  export let state: SearchViewState;

  let result = null;

  $: {
    (async (state) => {
      switch (state) {
        case SearchViewState.loading:
          result = (await import("./RepositoriesSkeleton.svelte")).default;
          break;
        case SearchViewState.error:
          result = (await import("./SearchError.svelte")).default;
          break;
        case SearchViewState.loaded:
          result = (await import("./RepositoryList.svelte")).default;
          break;
        default:
          result = null;
      }
    })(state);
  }
</script>

<section>
  <svelte:component this={result} />
</section>

<style>
  section {
    max-height: max(75vh, 350px);
    overflow-y: auto;
    padding-inline:0 10px;
  }
</style>
