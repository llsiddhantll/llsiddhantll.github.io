<style>
  header {
    grid-column: 2 / 2;
    align-items: center;
    display: grid;
    grid-template-columns: 1fr repeat(4, min-content);
    grid-column-gap: 40px;
    /* padding-top: 20px; */
    /* margin-right: 50px; */
  }

  a:nth-child(1) {
    grid-column-start: 2;
  }

  a {
    color: #a1adbd;
    text-decoration: none;
    font-size: 14px;
    position: relative;
  }

  a.highlighted {
    color: #ea5455;
  }

  @keyframes slide {
    from {
      width: 0;
    }

    to {
      width: 100%;
    }
  }

  a:hover:after {
    content: '';
    animation: slide 0.5s forwards;
    height: 2px;
    position: absolute;
    left: 0;
    top: 24px;
    background-color: #ea5455;
  }
</style>

<header class="container">
  <a href="#about">About</a>
  <a href="#experience">Experience</a>
  <a href="#projects">Projects</a>

  <a
    class="highlighted"
    href="https://goo.gl/P6eL5k"
    target="_blank"
    rel="noreferrer noopener">
    Resume
  </a>
</header>
