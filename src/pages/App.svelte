<script>
  import Header from 'components/Header.svelte'
  import Footer from 'components/Footer.svelte'

  import Home from 'pages/Home.svelte'
  import About from 'pages/About.svelte'
  import Experience from 'pages/Experience.svelte'
  import Projects from 'pages/Projects.svelte'
  import Contact from 'pages/Contact.svelte'
</script>

<style>
  .container {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100vw;
    height: 100vh;
  }

  .content {
    flex: 1;
    width: 960px;
  }

  @media (max-width: 1000px) {
    .content {
      width: 600px;
    }
  }

  @media (max-width: 650px) {
    .content {
      width: 400px;
    }
  }
</style>

<svelte:head>
  <title>Siddhant's Website</title>
  <link
    href="https://fonts.googleapis.com/css?family=Poppins:700|Space+Mono&display=swap"
    rel="stylesheet" />

  <style>
    body {
      display: flex;
      justify-content: center;
      padding: 0;
      margin: 0;
      background: #0d213b;
      color: #a1adbd;
      font-family: 'Space Mono', monospace;
      overflow-x: hidden;
      min-height: 100vh;
    }
  </style>
</svelte:head>

<div class="container">
  <Header />
  <div class="content">
    <Home />
    <About />
    <Experience />
    <Projects />
    <Contact />
  </div>
  <Footer />
</div>
