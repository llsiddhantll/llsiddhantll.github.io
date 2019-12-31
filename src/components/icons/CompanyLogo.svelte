<script>
  import Prisma from './Prisma.svelte'
  import Perdoo from './Perdoo.svelte'
  import Postman from './Postman.svelte'

  export let name
</script>

<style>
  .logo :global(svg) {
    height: 30px;
    max-width: 30px;
  }
</style>

<div class="logo">
  {#if name === 'prisma'}
    <Prisma />
  {:else if name === 'perdoo'}
    <Perdoo />
  {:else if name === 'postman'}
    <Postman />
  {/if}
</div>
