<script>
  import Icon from 'components/Icon.svelte'

  const links = [
    {
      icon: 'github',
      url: 'https://github.com/madebysid'
    },
    {
      icon: 'angelList',
      url: 'https://angel.co/siddhantsinha'
    },
    {
      icon: 'linkedIn',
      url: 'https://www.linkedin.com/in/madebysid'
    }
  ]
</script>

<style>
  .container {
    display: flex;
    flex-direction: column;
    position: fixed;
    right: 50px;
    bottom: 20px;
    width: 38px;
  }

  .link {
    padding: 10px;
  }

  .link:hover {
    fill: #ea5455;
  }

  @media (max-width: 650px) {
    .container {
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

<div class="container">
  {#each links as link}
    <a class="link" href={link.url} target="_blank" rel="noreferrer nooponer">
      <Icon type={link.icon} />
    </a>
  {/each}
</div>
