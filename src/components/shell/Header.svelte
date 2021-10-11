<script>
  import { isActive, url } from "@roxi/routify";

  const links = [
    ["/index", "Home"],
    ["/about", "About"],
    ["/contact", "Contact"],
  ];
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

<style>
  .active {
    font-weight: bold;
  }
</style>
