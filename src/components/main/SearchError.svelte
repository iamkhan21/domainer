<script lang="ts">
  import { get } from "svelte/store";
  import { repositories } from "../../stores/repositories";

  const { data: error } = get(repositories);
</script>

<h3>Error</h3>
<p>{error}</p>
