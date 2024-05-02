<script>
  import NavLink from "$lib/NavLink.svelte";
</script>

<main class="page-width">
  <slot />
</main>

<footer class="page-width">
  <small>© 2024 Nick Beuchat</small>
  <small><NavLink href="/colophon" title="View colophon">Colophon</NavLink></small>
</footer>

<style>
  main {
    flex-grow: 1;
    display: flex;
    flex-direction: column;
    justify-content: center;
  }
  footer {
    padding-bottom: 2.4rem;
  }
</style>