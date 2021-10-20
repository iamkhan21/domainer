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

<style lang="postcss">
  :root {
    --track: #f2f2f2;
    --thumb: #a8a8a8;
  }

  section {
    max-height: max(75vh, 350px);
    overflow-y: auto;
    padding-inline: 0 10px;

    scrollbar-width: thin;
    scrollbar-color: var(--thumb) var(--track);

    &::-webkit-scrollbar {
      width: 8px;
    }

    &::-webkit-scrollbar-track {
      background: var(--track);
    }

    &::-webkit-scrollbar-thumb {
      background-color: var(--thumb);

      &:hover {
        filter: brightness(25%);
      }
    }
  }
</style>
