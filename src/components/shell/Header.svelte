<script lang="ts">
  import { isActive, url } from "@roxi/routify";
  import {links} from "../../configs/routes";


</script>

<header>
  <h1>Domainer</h1>
  <nav>
    {#each links as [path, name]}
      <a href={$url(path)} class:active={$isActive(path)}>
        {name}
      </a>
    {/each}
  </nav>
</header>

<style lang="postcss">
  h1 {
    @apply text-2xl font-black;
  }

  .active {
    font-weight: bold;
  }
</style>
