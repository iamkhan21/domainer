<script lang="ts">
  import Header from "../components/shell/Header.svelte";
</script>

<Header />

<main>
  <slot />
</main>

<footer>
  <small>
    Created by
    <a
      href="https://www.8byte.agency"
      target="_blank"
      rel="noopener noreferrer"
    >
      8byte Agency
    </a>
  </small>
</footer>
