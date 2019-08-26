<script>
  import Page from 'components/Page.svelte'
  import Paragraph from 'components/Paragraph.svelte'
  import List from 'components/List.svelte'

  import data from 'data/about.json'
</script>

<Page id="about" title="About">
  <Paragraph>
    {#each data.text as paragraph}
      <p>{paragraph}</p>
    {/each}
  </Paragraph>

  <List columns={2} items={data.tech} />
</Page>
