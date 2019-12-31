<script>
  import Paragraph from '../base/Paragraph.svelte'
  import Testimonial from '../Testimonial.svelte'

  import data from '../../data/home.json'
</script>

<style>
  section {
    grid-column: 2 / 2;
    min-height: 100vh;
    position: relative;
    margin-bottom: 240px;
  }

  @keyframes moveLeft {
    from {
      margin-left: 80px;
    }

    to {
      margin-left: 0;
    }
  }

  .hero {
    display: flex;
    flex-direction: column;
    margin-top: 150px;
    width: 100%;
    position: relative;
    animation-name: moveLeft;
    animation-duration: 1s;
    animation-timing-function: cubic-bezier(0.165, 0.84, 0.44, 1);
    animation-fill-mode: forwards;
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

  @keyframes moveRight {
    from {
      left: 0;
    }

    to {
      left: 900px;
    }
  }

  .cover {
    background-color: #0d213b;
    width: 1000px;
    height: 600px;
    position: absolute;
    top: 0px;
    left: 0;
    animation-name: moveRight;
    animation-duration: 1s;
    animation-timing-function: cubic-bezier(0.165, 0.84, 0.44, 1);
    animation-fill-mode: forwards;
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
    animation-name: moveRight;
    animation-duration: 1s;
    animation-timing-function: cubic-bezier(0.165, 0.84, 0.44, 1);
    animation-fill-mode: forwards;
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

<section>
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

    <div class="cover" />

    <div class="revealTriangle" />

    <div class="scrollIndicator" />

  </div>
</section>
