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
</style>

<Page id="contact" title="Contact">
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
</Page>
