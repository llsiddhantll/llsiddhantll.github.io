<script>
  import Section from '../base/Section.svelte'
  import Paragraph from '../base/Paragraph.svelte'
  import List from '../base/List.svelte'
</script>

<Section id="about" title="About">
  <Paragraph>
    <p>
      I like to think I'm flexible, easy-going and just generally nice to hang
      or work with. That is, up until you talk smack about Rocket League. Then
      you gon' get shamed, son!
    </p>

    <p>
      People I would do anything to meet IRL: Paul Graham, Alexis Ohanian, Felix
      Kjellberg, Kevin De Bruyne.
    </p>

    <p>
      I want to work with bleeding-edge tech. And teams that geek out on
      bleeding-edge tech! Nothing brings me more joy than working with code that
      challenges the “right way” of doing things. I'm currently fanboying over
      Svelte.
    </p>

    <p>Speaking of tech, here's some I'm fluent with:</p>
  </Paragraph>

  <List
    columns={2}
    items={['JavaScript', 'TypeScript', 'SASS/CSS', 'React', 'Svelte', 'MobX', 'Redux', 'Electron', 'React Native', 'Jest/Mocha/Enzyme']} />
</Section>
