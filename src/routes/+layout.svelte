<script>
  import Footer from "$lib/Footer.svelte";
  import Header from "$lib/Header.svelte";
</script>

<Header />
<main class="page-width">
  <slot />
</main>
<Footer />

<style>
  main {
    flex-grow: 1;
    padding-top: 6.4rem;
    display: grid;
  }
</style>