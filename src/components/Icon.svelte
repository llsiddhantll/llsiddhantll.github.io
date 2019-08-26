<script>
  import angelList from 'assets/images/icons/angel-list.svg'
  import github from 'assets/images/icons/github.svg'
  import linkedIn from 'assets/images/icons/linkedin.svg'
  import web from 'assets/images/icons/web.svg'

  const icons = {
    angelList,
    github,
    linkedIn,
    web
  }

  export let type
</script>

<style>
  .icon :global(svg) {
    width: 18px;
    height: 18px;
    fill: #a1adbd;
  }

  .icon :global(svg:hover) {
    fill: #ea5455;
  }
</style>

<div class="icon">
  {@html icons[type]}
</div>
