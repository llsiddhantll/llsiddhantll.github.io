<script>
  import Page from 'components/Page.svelte'
  import Paragraph from 'components/Paragraph.svelte'
  import List from 'components/List.svelte'
  import Logo from 'components/Logo.svelte'

  import data from 'data/experience.json'
</script>

<style>
  .company {
    margin-bottom: 160px;
  }

  .header {
    display: flex;
    align-items: center;
    margin-bottom: 20px;
  }

  .title {
    color: #ea5455;
    margin-right: 10px;
    margin-left: 15px;
  }

  .years {
    flex: 1;
  }

  .website {
    color: #00b7ff;
  }
</style>

<Page id="experience" title="Experience">
  {#each data.companies as company (company.id)}
    <div class="company">
      <div class="header">
        <Logo name={company.id} />
        <span class="title">{company.title}</span>
        <span class="years">({company.years})</span>
        <a
          class="website"
          href={company.website.link}
          targte="_blank"
          rel="noreferrer noopener">
          {company.website.label}
        </a>
      </div>

      <Paragraph>
        {#each company.text as line}
          <p>{line}</p>
        {/each}
      </Paragraph>

      <List items={company.tech} />
    </div>
  {/each}
</Page>
