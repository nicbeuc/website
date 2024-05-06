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
    <p><span>Nick Beuchat</span> is a designer and creative developer based in Knoxville, currently working at Make Me Modern.</p>
  </div>
  <div class="navbar__footer">
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
      <small class="copyright">© {new Date().getFullYear()}</small>
    </div>
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
      margin-top: 3.2rem;

      & span {
        color: var(--color-neutral-900);
      }
    }
  }

  .navbar__footer {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding-top: 2.4rem;
    border-top: var(--border);

    & .links {
      display: flex;
      gap: 1.6rem;
    }

    & .icons {
      display: flex;
      gap: 1.6rem;
    }

    & .copyright {
      color: var(--color-neutral-600);
    }
  }
</style>