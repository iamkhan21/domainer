<script lang="ts">
  import { formatDateToHR } from "../../utils/formatters";

  export let repo;
</script>

<section class="repo-card">
  <div class="repo-card--header">
    <a
      href={repo.url}
      target="_blank"
      rel="noopener noreferrer"
      class="repo-card--title"
    >
      {repo.name}
    </a>
    <small>({repo.diskUsage} kB)</small>
  </div>
  <p class="repo-card--descr">{repo.description ?? "Without description"}</p>
  <p>
    Created at <time datetime={repo.createdAt}
      >{formatDateToHR(repo.createdAt)}</time
    >
  </p>
</section>

<style lang="postcss">
  :global(.repo-card + .repo-card) {
    margin-top: 15px;
  }

  .repo-card {
    @apply py-2 px-4 border rounded max-w-screen-sm shadow-md;

    &--header {
      @apply flex items-baseline;
      gap: 10px;
    }
    &--title {
      @apply font-bold text-xl;
    }
    &--descr {
      @apply text-lg;
    }
  }
</style>
