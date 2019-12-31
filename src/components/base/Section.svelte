<script>
  export let id
  export let title
</script>

<style>
  .container {
    grid-column: 2 / 2;
    display: flex;
    flex-direction: column;
    min-height: 100vh;
    margin-bottom: 180px;
  }

  .title {
    display: flex;
    align-items: center;
    font-family: 'Poppins';
    font-weight: 700;
    font-size: 54px;
    color: #a1adbd;
    text-transform: uppercase;
  }

  .title:after {
    content: '';
    margin-left: 60px;
    flex: 1;
    height: 1px;
    background-color: #a1adbd;
    opacity: 0.5;
  }

  .content {
    display: flex;
    flex-direction: column;
    align-items: center;
    align-self: center;
    width: 800px;
    margin-top: 40px;
  }

  @media (max-width: 1000px) {
    .content {
      width: 600px;
    }
  }

  @media (max-width: 650px) {
    .content {
      width: 400px;
    }
  }
</style>

<div {id} class="container">
  <span class="title">{title}</span>
  <div class="content">
    <slot />
  </div>
</div>
