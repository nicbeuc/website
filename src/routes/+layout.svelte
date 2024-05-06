<script>
  import Navbar from "$lib/Navbar.svelte";
</script>

<div class="wrapper">
  <Navbar />
  <main class="page-width">
    <slot />
  </main>
</div>

<style>
  .wrapper {
    --max-width: var(--page-width);
    --navbar-width: 32rem;
    max-width: var(--max-width);
    display: flex;
    align-items: flex-start;
    justify-content: flex-end;
    width: 100%;
    margin-inline: auto;
  }
  main {
    flex-basis: calc(min(100vw, var(--max-width)) - var(--navbar-width));
    padding: var(--padding-inline) calc(var(--padding-inline) / 2) var(--padding-inline) var(--padding-inline);
    min-height: 100vh;
    display: grid;
  }
</style>