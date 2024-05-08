<script>
  import NavLink from "$lib/NavLink.svelte";
  import Icon from "$lib/Icon.svelte";
  import Logo from "./Logo.svelte";
  import { socialLinks } from "$lib/constants";
</script>

<header>
  <div class="navbar__header">
    <a href="/">
      <Logo />
    </a>
    <p><span>Nick Beuchat</span> is a designer and creative developer based in Knoxville, TN.</p>
    <!-- <div class="icons">
      <NavLink href={socialLinks.github} external>
        <Icon name="github" title="GitHub"/>
      </NavLink>
      <NavLink href={socialLinks.linkedin} external>
        <Icon name="linkedin" title="LinkedIn"/>
      </NavLink>
      <NavLink href={socialLinks.readcv} external>
        <Icon name="readcv" title="read.cv"/>
      </NavLink>
    </div> -->
  </div>
  <div class="navbar__footer">
    <small><NavLink href="/colophon">Colophon</NavLink></small>
    <small>© {new Date().getFullYear()}</small>
  </div>
</header>

<style>
  header {
    padding: var(--padding-inline) calc(var(--padding-inline) / 2) var(--padding-inline) var(--padding-inline);
    height: 100vh;
    width: var(--navbar-width);
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    position: fixed;
    top: 0;
    left: calc((max(100vw, var(--page-width)) - var(--page-width)) / 2);
  }

  .navbar__header {
    & p {
      color: var(--color-neutral-600);
      margin-top: 2.4rem;

      & span {
        color: var(--color-neutral-900);
      }
    }

    & .icons {
      display: flex;
      gap: 1.6rem;
      margin-top: 1.6rem;
    }
  }

  .navbar__footer {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding-top: 2.4rem;
    border-top: var(--border);

    & .copyright {
      color: var(--color-neutral-600);
    }
  }
</style>