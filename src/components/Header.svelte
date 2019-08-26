<script>
  const links = [
    {
      label: 'About',
      url: '#about'
    },
    {
      label: 'Experience',
      url: '#experience'
    },
    {
      label: 'Projects',
      url: '#projects'
    }
  ]
</script>

<style>
  .container {
    display: flex;
    justify-content: flex-end;
    align-self: flex-end;
    padding-top: 20px;
    margin-right: 50px;
    flex: 0 0 30px;
  }

  .link {
    color: #a1adbd;
    text-decoration: none;
    margin: 0 20px;
    font-size: 14px;
    position: relative;
  }

  .link--highlight {
    color: #ea5455;
  }

  @keyframes slide {
    from {
      width: 0;
    }

    to {
      width: 100%;
    }
  }

  .link:hover:after {
    content: '';
    animation: slide 0.5s forwards;
    height: 2px;
    position: absolute;
    left: 0;
    top: 24px;
    background-color: #ea5455;
  }

  .link.active {
    font-weight: 700;
    color: #ea5455;
  }
</style>

<div class="container">
  {#each links as link}
    <a class="link" href={link.url}>{link.label}</a>
  {/each}

  <a
    class="link link--highlight"
    href="https://goo.gl/P6eL5k"
    target="_blank"
    rel="noreferrer noopener">
    Resume
  </a>
</div>
