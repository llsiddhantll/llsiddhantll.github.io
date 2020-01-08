<script>
  import Section from '../base/Section.svelte'
  import Paragraph from '../base/Paragraph.svelte'
  import Image from '../base/Image.svelte'
  import Tabs from '../base/Tabs.svelte'

  import data from '../../data/projects.json'

  let activeTabIdx = 0
</script>

<style>
  .projects {
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-template-rows: 80px repeat(3, min-content);
    width: 100%;
    grid-template-areas:
      'tabs  tabs'
      'meta  meta'
      'desc  desc'
      'scr   tech';
  }

  .tabs {
    grid-area: tabs;
    display: flex;
    align-items: center;
  }

  .meta {
    grid-area: meta;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-bottom: 40px;
  }

  .logo {
    margin-right: 20px;
    width: 70px;
    height: 70px;
  }

  .name {
    font-size: 24px;
    color: #fff;
  }

  .description {
    grid-area: desc;
    margin-bottom: 60px;
  }

  .title {
    color: #00b7ff;
    font-size: 18px;
    margin-bottom: 30px;
  }

  .screenshots {
    grid-area: scr;
  }

  .tech {
    grid-area: tech;
  }
</style>

<Section id="projects" title="Projects">
  <Paragraph>
    <p>
      Let’s look at some things I’ve built. Some came out of necessity, most
      were done out of boredom, or in hackathons.
    </p>

    <p>
      Other projects not shown here can be found over at my
      <a href="https://github.com/madebysid" rel="noreferrer noopener">
        GitHub
      </a>
      page.
    </p>
  </Paragraph>

  <div class="projects">
    <span class="tabs">
      <Tabs
        tabs={data.projects.map(p => p.name)}
        {activeTabIdx}
        on:change={e => {
          activeTabIdx = e.detail
        }} />
    </span>

    <div class="meta">
      <img
        class="logo"
        src="{data.projects[activeTabIdx].name.toLowerCase()}/logo.png"
        alt="Project logo" />
      <span class="name">{data.projects[activeTabIdx].name}</span>
    </div>

    <div class="description">
      {#each data.projects[activeTabIdx].text as line}
        <p>{line}</p>
      {/each}
    </div>

    <div class="screenshots">
      <div class="title">Screenshots</div>
      {#each data.projects[activeTabIdx].screenshots as screenshot, scrIdx}
        <Image src={screenshot} alt="Project screenshot {scrIdx}" />
      {/each}
    </div>

    <div class="tech">
      <div class="title">Tech</div>
      <ul>
        {#each data.projects[activeTabIdx].tech as tech}
          <li>{tech}</li>
        {/each}
      </ul>
    </div>

  </div>
</Section>
