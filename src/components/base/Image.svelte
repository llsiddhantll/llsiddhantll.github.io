<script>
  let isBlownUp = false

  const onClickImage = () => {
    isBlownUp = true
  }

  const onClickOutside = () => {
    isBlownUp = false
  }

  export let src
  export let alt
</script>

<style>
  img {
    width: 250px;
    cursor: pointer;
  }

  .mask {
    position: fixed;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    opacity: 0.7;
    background: #000;
    cursor: pointer;
  }

  .blown-up-img {
    position: fixed;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    margin: auto;
    width: 80%;
    z-index: 2;
  }
</style>

<img {src} {alt} on:click={onClickImage} />

<svelte:window on:scroll={onClickOutside} />

{#if isBlownUp}
  <div on:click={onClickOutside}>
    <div class="mask" />
    <img class="blown-up-img" {src} {alt} />
  </div>
{/if}
