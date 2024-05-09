<script>
  import Link from "$lib/Link.svelte";
  import Logo from "./Logo.svelte";
</script>

<header>
  <div class="navbar__header">
    <a href="/">
      <Logo />
    </a>
  </div>
  <div class="navbar__links">
    <Link>Work</Link>
    <Link>Now</Link>
    <Link>Reading</Link>
    <Link>Listening</Link>
  </div>
  <div class="navbar__footer">
    <small><Link href="/colophon">Colophon</Link></small>
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
      border-radius: 2.4rem;
      border: var(--border);
    }
  }

  .navbar__links {
    display: none;
    @media screen and (min-width: 800px) {
      display: block;
      margin-top: 4.8rem;
    }

    & a {
      display: block;

      &:not(:last-of-type) {
        margin-bottom: .4rem;
      }
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