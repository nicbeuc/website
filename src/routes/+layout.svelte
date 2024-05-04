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
    <NavLink href={socialLinks.linkedin} external>
      <Icon name="linkedin" title="LinkedIn"/>
    </NavLink>
    <NavLink href={socialLinks.readcv} external>
      <Icon name="readcv" title="read.cv"/>
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
    padding-top: 6.4rem;
    display: grid;
  }
  footer {
    padding-bottom: 6.4rem;
    margin-top: 6.4rem;
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
  .links {
    display: flex;
    gap: 1.6rem;
  }
  .icons {
    display: flex;
    gap: 1.6rem;
  }
  .copyright {
    color: var(--color-neutral-600);
  }
</style>