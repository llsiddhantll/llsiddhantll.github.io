<script>
  import Header from '../components/Header.svelte'
  import Footer from '../components/Footer.svelte'
  import Home from '../components/sections/Home.svelte'
  import About from '../components/sections/About.svelte'
  import Experience from '../components/sections/Experience.svelte'
  import Projects from '../components/sections/Projects.svelte'
  import Contact from '../components/sections/Contact.svelte'
</script>

<style>
  main {
    display: grid;
    grid-template-columns: 1fr 960px 1fr;
    grid-template-rows: 50px 1fr;
  }
</style>

<main>
  <Header />
  <Home />
  <About />
  <Experience />
  <Projects />
  <Contact />
  <Footer />
</main>
