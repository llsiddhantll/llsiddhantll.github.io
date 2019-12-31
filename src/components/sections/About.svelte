<script>
  import Section from '../base/Section.svelte'
  import Paragraph from '../base/Paragraph.svelte'
  import List from '../base/List.svelte'

  import data from '../../data/about.json'
</script>

<Section id="about" title="About">
  <Paragraph>
    {#each data.text as paragraph}
      <p>{paragraph}</p>
    {/each}
  </Paragraph>

  <List columns={2} items={data.tech} />
</Section>
