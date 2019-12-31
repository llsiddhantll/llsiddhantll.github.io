<script>
  import Section from '../base/Section.svelte'
  import Paragraph from '../base/Paragraph.svelte'
  import List from '../base/List.svelte'

  import data from '../../data/contact.json'
</script>

<style>
  .opinions {
    margin-top: 20px;
  }
</style>

<Section id="contact" title="Contact">
  <div class="opinions">
    <Paragraph>
      {#each data.text as line}
        <p>
          {@html line}
        </p>
      {/each}
    </Paragraph>
  </div>

  <List items={data.opinions} />
</Section>
