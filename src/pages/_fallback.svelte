<script>
  import { url } from "@roxi/routify";
</script>

<article class="e404">
  <section class="huge">
    <h3>404</h3>
  </section>
  <section class="big">
    <h2>Page not found.</h2>
    <a href={$url("../")}>Go back</a>
  </section>
</article>

<style>
  .huge {
  }

  .e404 {
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    text-align: center;
  }
</style>
