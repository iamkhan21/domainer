<script lang="ts">
  export let repo;
</script>

<section class="repo-card">
  <h3>{repo.name}</h3>
  <p>{repo.description ?? ""}</p>
  <p><small>{repo.diskUsage / 1000} MB</small></p>
  <time datetime={repo.createdAt}>{repo.createdAt}</time>
</section>

<style lang="postcss">
  :global(.repo-card + .repo-card) {
    margin-top: 15px;
  }
</style>
