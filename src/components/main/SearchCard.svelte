<script lang="ts">
  export let loading = false;
  export let onSubmit = (value: string) => {};

  let username = "";

  function submit() {
    onSubmit(username);
  }
</script>

<section class="search-card">
  <h2 class="search-card--title">Search repositories of GitHub's user</h2>
  <form class="search-card--form" on:submit|preventDefault={submit}>
    <input
      placeholder="Username"
      bind:value={username}
      class="search-card--form-input"
      disabled={loading}
      required
      type="search"
    />
    <button class="search-card--form-btn" disabled={loading} type="submit"
      >{loading ? "Searching" : "Search"}</button
    >
  </form>
</section>

<style lang="postcss">
  .search-card {
    @apply inline-block border border-gray-300 my-8 py-6 px-8 text-2xl rounded-xl shadow-md;

    &--title {
      @apply leading-tight text-3xl font-semibold mb-4;
    }

    &--form {
      @apply flex space-x-4;

      &-input {
        @apply border border-gray-400 flex-grow rounded py-1 px-3 text-xl;
      }

      &-btn {
        @apply px-4 text-lg rounded bg-blue-500 shadow-sm text-white;

        &:hover:not(:disabled) {
          @apply bg-blue-600;
        }

        &:active {
          @apply bg-blue-700 shadow-inner;
        }

        &:disabled {
          @apply cursor-wait;
        }
      }
    }
  }
</style>
