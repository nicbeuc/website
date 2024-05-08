<script>
  import NavLink from "$lib/NavLink.svelte";
  import Logo from "./Logo.svelte";
</script>

<header>
  <div class="navbar__header">
    <a href="/">
      <Logo />
    </a>
  </div>
  <div class="navbar__content">
    <!-- <p><span>Nick Beuchat</span> is a designer and creative developer based in Knoxville, TN.</p> -->
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
    display: grid;
    grid-template-columns: 100%;
    grid-template-rows: auto 1fr auto;
    position: fixed;
    top: 0;
    left: calc((max(100vw, var(--page-width)) - var(--page-width)) / 2);
    z-index: 1;

    @media screen and (max-width: 799px) {
      width: calc(min(100vw, var(--page-width)) - var(--padding-inline) * 2);
      left: calc(((max(100vw, var(--page-width)) - var(--page-width)) / 2) + var(--padding-inline));
      padding: 1.6rem 2rem;
      top: unset;
      bottom: var(--padding-inline);
      height: auto;
      background-color: var(--color-neutral-100);
      border-radius: 100vw;
      border: var(--border);
    }
  }

  .navbar__content {
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

    @media screen and (max-width: 799px) {
      display: none;
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

    @media screen and (max-width: 799px) {
      display: none;
    }
  }
</style>