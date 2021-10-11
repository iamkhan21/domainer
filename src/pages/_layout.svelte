<script lang="ts">
  import Header from "../components/shell/Header.svelte";
  import Footer from "../components/shell/Footer.svelte";
</script>

<Header />

<main>
  <slot />
</main>

<Footer />
