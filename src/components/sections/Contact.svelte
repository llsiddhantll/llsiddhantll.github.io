<script>
  import Section from '../base/Section.svelte'
  import Paragraph from '../base/Paragraph.svelte'
  import List from '../base/List.svelte'
</script>

<style>
  .opinions {
    margin-top: 20px;
  }
</style>

<Section id="contact" title="Contact">
  <div class="opinions">
    <Paragraph>
      <p>
        If you're convinced, and want to have a chat with me, hit me up! You can
        reach me at
        <a href="mailto:me@madebysid.com?subject=Howdy!">me @ madebysid.com</a>
        . If you're in Berlin and want to hang, I'm open!"
      </p>

      <p>Check out my presence on the interwebs!</p>

      <p>Let's end with some opinions no one asked for:</p>
    </Paragraph>
  </div>

  <List
    items={['VS Code > Sublime Text', 'Sublime Text > VS Code (in my heart)', 'Sublime Merge > git CLI', 'TypeScript > JavaScript', 'CSS Modules > CSS-in-JS (bring on the pitchforks)']} />
</Section>
