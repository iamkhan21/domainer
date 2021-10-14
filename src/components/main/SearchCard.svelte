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
      bind:value={username}
      class="search-card--form-input"
      disabled={loading}
      placeholder="Username"
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
    @apply inline-block border border-gray-300 my-8 p-4 text-lg rounded-xl shadow-md;

    @media (min-width: 450px) {
      @apply py-6 px-8 text-2xl;
    }

    &--title {
      @apply leading-tight text-xl font-semibold mb-4;

      @media (min-width: 450px) {
        @apply text-3xl;
      }
    }

    &--form {
      @apply flex flex-col;
      gap: 10px 15px;

      @media (min-width: 450px) {
        @apply flex-row;
      }

      &-input {
        @apply border border-gray-400 flex-grow rounded py-1 px-3 text-base;
        @media (min-width: 450px) {
          @apply text-xl;
        }
      }

      &-btn {
        @apply px-4 py-1 text-base rounded bg-blue-500 shadow-sm text-white;

        &:hover:not(:disabled) {
          @apply bg-blue-600;
        }

        &:active {
          @apply bg-blue-700 shadow-inner;
        }

        &:disabled {
          @apply cursor-wait;
        }

        @media (min-width: 450px) {
          @apply text-xl;
        }
      }
    }
  }
</style>
