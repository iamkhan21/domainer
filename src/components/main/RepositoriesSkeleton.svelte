<div class="skeleton" />
<div class="skeleton" />
<div class="skeleton" />
<div class="skeleton" />
<div class="skeleton" />

<style lang="postcss">
  .skeleton {
    @apply h-100px max-w-screen-md rounded bg-gray-100;

    & + .skeleton {
      margin-top: 15px;
    }
  }
</style>
