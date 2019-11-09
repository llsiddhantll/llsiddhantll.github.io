<script>
  import { onMount } from 'svelte'
  import { tweened } from 'svelte/motion'
  import { cubicInOut } from 'svelte/easing'

  import Paragraph from 'components/Paragraph.svelte'
  import Testimonial from 'components/Testimonial.svelte'

  import data from 'data/home.json'

  const coverPositionX = tweened(0, {
    delay: 300,
    duration: 1000,
    easing: cubicInOut
  })

  onMount(() => {
    coverPositionX = 900
  })
</script>

<style>
  .container {
    min-height: 100vh;
    position: relative;
    margin-bottom: 240px;
  }

  .hero {
    display: flex;
    flex-direction: column;
    margin-top: 150px;
    width: 100%;
    position: relative;
  }

  .pretext {
    font-size: 24px;
    color: #ea5455;
    font-weight: 700;
  }

  .name {
    font-family: 'Poppins';
    font-weight: 700;
    font-size: 114px;
    color: #ffffff;
    margin-top: -20px;
    text-transform: uppercase;
  }

  .position {
    font-family: 'Poppins';
    font-weight: 700;
    font-size: 74px;
    color: #a1adbd;
    text-transform: uppercase;
  }

  .description {
    font-size: 18px;
    max-width: 510px;
    margin-top: 100px;
  }

  .testimonials {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    margin-top: 40px;
  }

  .cover {
    background-color: #0d213b;
    width: 1000px;
    height: 600px;
    position: absolute;
    top: 0px;
    left: 0;
    background-color: red;
  }

  .revealTriangle {
    width: 0;
    height: 0;
    border: 20px solid transparent;
    border-left-color: #ea5455;
    border-left-width: 30px;
    position: absolute;
    top: 260px;
    right: 0;
  }

  @media (max-width: 650px) {
    .revealTriangle {
      right: -80px;
    }
  }

  .scrollIndicator {
    width: 0;
    height: 0;
    border: 6px solid transparent;
    border-top-color: #ea5455;
    border-top-width: 9px;
    left: 0;
    bottom: 0;
    right: 0;
    margin: auto;
  }
</style>

<div class="container">
  <div class="hero">
    <span class="pretext">Hi, I'm</span>
    <span class="name">{data.name}</span>
    <span class="pretext">and I'm a</span>
    <span class="position">{data.title}</span>
    <div class="description">
      <Paragraph>
        {#each data.text as line}
          <p>{line}</p>
        {/each}
      </Paragraph>
    </div>

    <div class="testimonials">

      {#each data.testimonials as testimonial}
        <Testimonial
          text={testimonial.text}
          author={testimonial.author}
          title={testimonial.title} />
      {/each}
    </div>

    <div class="cover" style={{ left: $coverPositionX }} />

    <div class="revealTriangle" />

    <div class="scrollIndicator" />

  </div>
</div>
