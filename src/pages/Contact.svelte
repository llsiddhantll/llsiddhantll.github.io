<script>
  import Page from 'components/Page.svelte'
  import Paragraph from 'components/Paragraph.svelte'
  import List from 'components/List.svelte'

  import data from 'data/contact.json'
</script>

<style>
  .opinions {
    margin-top: 20px;
  }

  .closingText {
    width: 100%;
    margin-top: 40px;
  }
</style>

<Page id="contact" title="Contact">
  <Paragraph>
    {#each data.text as line}
      <p>{line}</p>
    {/each}
  </Paragraph>

  <List items={data.opinions} />
</Page>
