<script>
  import NavLink from "$lib/NavLink.svelte";
  import Icon from "$lib/Icon.svelte";
  import { socialLinks } from "$lib/constants";
</script>

<main class="page-width">
  <slot />
</main>

<footer class="page-width">
  <div class="icons">
    <NavLink href={socialLinks.github} external>
      <Icon name="github" title="GitHub"/>
    </NavLink>
  </div>
  <div class="links">
    <small><NavLink href="/colophon">Colophon</NavLink></small>
    <small class="copyright">© {new Date().getFullYear()} Nick Beuchat</small>
  </div>
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
    display: flex;
    justify-content: space-between;
  }
  .links {
    display: flex;
    gap: 1.6rem;
  }
  .copyright {
    color: grey;
  }
</style>