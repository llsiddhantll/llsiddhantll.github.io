<script>
  import Github from './icons/Github.svelte'
  import AngelList from './icons/AngelList.svelte'
  import LinkedIn from './icons/LinkedIn.svelte'
</script>

<style>
  footer {
    display: flex;
    flex-direction: column;
    position: fixed;
    right: 0;
    bottom: 20px;
    width: 38px;
  }

  a {
    padding: 10px;
  }

  a :global(svg) {
    fill: #a1adbd;
  }

  a:hover :global(svg) {
    fill: #ea5455;
  }

  @media (max-width: 650px) {
    footer {
      flex-direction: row;
      position: absolute;
      top: 80px;
      left: 0;
      right: 0;
      margin: 0 auto;
      width: 230px;
    }
  }
</style>

<footer>
  <a
    href="https://github.com/madebysid"
    target="_blank"
    rel="noreferrer nooponer">
    <Github />
  </a>

  <a
    href="https://angel.co/siddhantsinh"
    target="_blank"
    rel="noreferrer nooponer">
    <AngelList />
  </a>

  <a
    href="https://www.linkedin.com/in/madebysid"
    target="_blank"
    rel="noreferrer nooponer">
    <LinkedIn />
  </a>
</footer>
