<script>
  import prisma from 'assets/images/experience/prisma.svg'
  import perdoo from 'assets/images/experience/perdoo.svg'
  import postman from 'assets/images/experience/postman.svg'

  const logos = { prisma, perdoo, postman }

  export let name
</script>

<style>
  .logo :global(svg) {
    height: 30px;
    max-width: 30px;
  }
</style>

<div class="logo">
  {@html logos[name]}
</div>
