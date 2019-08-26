<style>
  .container {
    display: flex;
    flex-direction: column;
    max-width: 800px;
  }

  .container :global(a) {
    color: #00b7ff;
  }
</style>

<div class="container">
  <slot />
</div>
