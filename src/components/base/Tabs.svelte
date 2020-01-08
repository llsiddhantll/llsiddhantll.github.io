<script>
  import { createEventDispatcher } from 'svelte'

  const tabSelectDispatch = createEventDispatcher()
  const onTabChange = idx => {
    tabSelectDispatch('change', idx)
  }

  export let tabs
  export let activeTabIdx
</script>

<style>
  .container {
    display: flex;
    align-items: center;
    justify-content: center;
    flex: 1;
  }

  .tab {
    flex: 1;
    text-align: center;
    border-right: 1px solid #a1adbd;
    color: #a1adbd;
    position: relative;
    cursor: pointer;
  }

  .tab:hover,
  .tab.active {
    color: #ea5455;
  }

  .tab:last-child {
    border-right: 0;
  }

  .tab.active:after {
    content: '';
    width: 0;
    height: 0;
    border: 6px solid transparent;
    border-top: 9px solid #ea5455;
    position: absolute;
    top: 35px;
    left: 0;
    right: 0;
    margin: 0 auto;
  }
</style>

<div class="container {$$props.class}">

  {#each tabs as tab, idx}
    <div
      class="tab"
      class:active={activeTabIdx === idx}
      on:click={() => onTabChange(idx)}>
      {tab}
    </div>
  {/each}
</div>
